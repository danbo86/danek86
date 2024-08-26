"use client"
import { useEffect, useState, useRef, Suspense } from "react"
import Loading from "@/app/konkurs_Zello/loading.js"
import SimpleWebSocket from "simple-websocket"
import { OpusDecoder } from "opus-decoder"

export default function Zello() {
  const [messages, setMessages] = useState([])
  const [chatMessages, setChatMessages] = useState([]) // Stan dla wiadomości tekstowych
  const audioContextRef = useRef(null)
  const decoderRef = useRef(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [ws, setWs] = useState(null)
  const [streamId, setStreamId] = useState(null)
  const chatWindowRef = useRef(null)

  useEffect(() => {
    const socket = new SimpleWebSocket("wss://zello.io/ws")
    setWs(socket)

    socket.on("connect", () => {
      console.log("Connected to Zello")

      const authToken = process.env.NEXT_PUBLIC_SampleDeveloperToken || ""
      const username = process.env.NEXT_PUBLIC_ZelloUsername
      const password = process.env.NEXT_PUBLIC_ZelloPassword || ""
      const channels = ["danbo86"]

      const logonRequest = {
        command: "logon",
        seq: 1,
        auth_token: authToken || undefined,
        username: username,
        password: password || undefined,
        channels: channels,
      }

      socket.send(JSON.stringify(logonRequest))
    })

    socket.on("data", async (data) => {
      try {
        const message = JSON.parse(data)
        console.log("Received message:", message)

        if (message.command === "on_channel_status") {
          setMessages((prevMessages) => {
            const existingMessageIndex = prevMessages.findIndex(
              (msg) => msg.channel === message.channel,
            )
            if (existingMessageIndex >= 0) {
              const updatedMessages = [...prevMessages]
              updatedMessages[existingMessageIndex] = message
              return updatedMessages
            } else {
              return [...prevMessages, message]
            }
          })
        } else if (
          message.command === "on_stream_start" &&
          message.codec === "opus"
        ) {
          console.log("Stream started:", message)
          setStreamId(message.stream_id)
          setIsStreaming(true)
        } else if (
          message.command === "on_stream_stop" &&
          message.stream_id === streamId
        ) {
          console.log("Stream stopped:", message)
          setIsStreaming(false)
        } else if (message.command === "on_text_message") {
          // Obsługa wiadomości tekstowych
          setChatMessages((prevChatMessages) => [...prevChatMessages, message])
        }
      } catch (error) {
        console.error("Error parsing message:", error)

        // Jeśli dane nie są JSON, obsłuż je jako dane strumienia audio
        if (isStreaming) {
          console.log("Received audio data:", data)
          try {
            const audioData = new Uint8Array(data)
            console.log("Audio data length:", audioData.length)
            if (audioData.length > 0) {
              const decodedData =
                await decoderRef.current.decodeFrame(audioData)
              console.log("Decoded audio data:", decodedData)
              if (decodedData && decodedData.samplesDecoded > 0) {
                const audioBuffer = audioContextRef.current.createBuffer(
                  decodedData.channelData.length,
                  decodedData.samplesDecoded,
                  decodedData.sampleRate,
                )

                decodedData.channelData.forEach((channel, index) => {
                  audioBuffer.getChannelData(index).set(channel)
                })

                const source = audioContextRef.current.createBufferSource()
                source.buffer = audioBuffer
                source.connect(audioContextRef.current.destination)
                source.start(0)
                console.log("Audio played")
              } else {
                console.error(
                  "Decoding failed or no samples decoded.",
                  decodedData,
                )
              }
            } else {
              console.error("Audio data length is 0, skipping decoding.")
            }
          } catch (error) {
            console.error("Error processing audio data:", error)
          }
        }
      }
    })

    socket.on("close", () => {
      console.log("Disconnected from Zello")
      setIsStreaming(false)
    })

    socket.on("error", (error) => {
      console.error("WebSocket error:", error)
    })

    // Clean up socket and audio context on component unmount
    return () => {
      socket.destroy()
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close()
      }
    }
  }, [streamId])

  const startAudioContext = async () => {
    try {
      if (
        !audioContextRef.current ||
        audioContextRef.current.state === "closed"
      ) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)()
        console.log("AudioContext initialized")
      }

      if (!decoderRef.current) {
        const decoder = new OpusDecoder({
          sampleRate: 48000,
          channels: 1,
        })
        await decoder.ready
        decoderRef.current = decoder
        console.log("OpusDecoder initialized")
      }

      setIsStreaming(true)
    } catch (error) {
      console.error("Error starting audio context:", error)
    }
  }

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight
    }
  }, [chatMessages])

  const channelStatusMessage = messages.find((msg) => msg.channel === "danbo86")

  return (
    <section className="blog" id="blog">
      <h2 className="heading">
        Konkurs Forex <span>Trading</span>
      </h2>
      <h1>Moje Radio Zello</h1>
      <div>
        {!isStreaming && (
          <button className="btn-czat" onClick={startAudioContext}>
            Kliknij, aby rozpocząć słuchanie radia
          </button>
        )}
        {isStreaming && (
          <p className="p-warning">Strumieniowanie audio w toku...</p>
        )}
        <Suspense fallback={<Loading />}>
          {channelStatusMessage ? (
            <div>
              <p>Nazwa radia: {channelStatusMessage.channel}</p>
              <p>Użytkowników online: {channelStatusMessage.users_online}</p>
            </div>
          ) : (
            <p>ładowanie danych...</p>
          )}
        </Suspense>
        <div className="chat-window" ref={chatWindowRef}>
          <h3>Wiadomości na czacie:</h3>
          {chatMessages.length > 0 ? (
            chatMessages.map((msg, index) => (
              <div key={index} className="chat-message">
                <strong>{msg.from}</strong>: {msg.text}
              </div>
            ))
          ) : (
            <p>Brak wiadomości</p>
          )}
        </div>
      </div>
    </section>
  )
}
