"use client";
import { Suspense, useEffect, useState, useRef } from "react";
import Loading from "@/app/konkurs_Zello/loading.js";
import SimpleWebSocket from "simple-websocket";
import { OpusDecoder } from "@opus-tools/opus-decoder";

export default function Zello() {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const audioContextRef = useRef(null);
  const audioQueueRef = useRef([]);
  const decoderRef = useRef(null);

  useEffect(() => {
    const socket = new SimpleWebSocket("wss://zello.io/ws");
    setWs(socket);

    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    decoderRef.current = new OpusDecoder({ rate: 48000, channels: 1, frameSize: 960 });

    socket.on("connect", () => {
      console.log("Connected to Zello");

      const authToken = process.env.NEXT_PUBLIC_SampleDeveloperToken || "";
      const username = process.env.NEXT_PUBLIC_ZelloUsername;
      const password = process.env.NEXT_PUBLIC_ZelloPassword || "";
      const channels = ["Trading Hyde Park."];

      const logonRequest = {
        command: "logon",
        seq: 1,
        auth_token: authToken || undefined,
        username: username,
        password: password || undefined,
        channels: channels,
        listen_only: true,
      };

      socket.send(JSON.stringify(logonRequest));
    });

    socket.on("data", async (data) => {
      const message = JSON.parse(data);
      console.log("Received:", message);

      if (message.command === "start_stream" && message.codec === "opus") {
        // Handle audio stream start
        const audioData = message.data;
        if (audioData) {
          const decodedData = await decoderRef.current.decode(audioData);
          audioQueueRef.current.push(decodedData);
        }
      } else {
        setMessages((prevMessages) => {
          const existingMessageIndex = prevMessages.findIndex((msg) => msg.channel === message.channel);
          if (existingMessageIndex !== -1) {
            const updatedMessages = [...prevMessages];
            updatedMessages[existingMessageIndex] = message;
            return updatedMessages;
          } else {
            return [...prevMessages, message];
          }
        });
      }
    });

    socket.on("close", () => {
      console.log("Disconnected from Zello");
    });

    return () => {
      socket.destroy();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (audioQueueRef.current.length > 0) {
      const audioData = audioQueueRef.current.shift();
      const audioBuffer = audioContextRef.current.createBuffer(1, audioData.length, 48000);
      audioBuffer.getChannelData(0).set(audioData);

      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.start(0);
    }
  }, [messages]);

  const channelStatusMessages = messages.filter((msg) => msg.channel === "Trading Hyde Park.");

  return (
    <section className="blog" id="blog">
      <h2 className="heading">
        Konkurs Forex <span>Trading</span>
      </h2>
      <h1>Moje Radio Zello</h1>
      <div>
        <Suspense fallback={<Loading />}>
          {channelStatusMessages.length > 0 ? (
            channelStatusMessages.map((msg, index) => (
              <div key={index}>
                <h1>{msg.channel}</h1>
                <h2>Użytkowników online jest: {msg.users_online}</h2>
              </div>
            ))
          ) : (
            <p>ładownie danych...</p>
          )}
        </Suspense>
      </div>
    </section>
  );
}
