import React, { useState, useEffect } from "react"
import "./Contact.css"

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append("access_key", "33ba92fa-beb6-479d-b9c0-64bde713b6bc")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })

      const res = await response.json()

      if (res.success) {
        console.log("Success", res)
        setMessageSent(true)
        event.target.reset() // Clear form fields
      } else {
        console.error("Failed", res)
      }
    } catch (error) {
      console.error("Error", error)
    }
  }

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false)
      }, 60000) // 3 minutes in milliseconds

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer)
    }
  }, [messageSent])

  return (
    <div className="contact">
      <form onSubmit={onSubmit}>
        <h2>Kontakt</h2>
        {messageSent && (
          <div className="success-message">Wiadomość została wysłana!</div>
        )}
        <div className="input-box">
          <label htmlFor="name">Imię i Nazwisko</label>
          <input
            id="name"
            name="name"
            type="text"
            className="field"
            placeholder="Imię i Nazwisko"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Adres Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="field"
            placeholder="Wpisz swój email"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="message">Twoja wiadomość</label>
          <textarea
            id="message"
            name="message"
            className="field mess"
            placeholder="Wpisz wiadomość"
            required
          ></textarea>
        </div>
        <button className="btn-kontakt" type="submit">
          Wyślij wiadomość
        </button>
      </form>
    </div>
  )
}

export default Contact
