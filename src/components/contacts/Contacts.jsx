import { useState } from "react";

import axios from "axios";
import { Facebook, Twitter, LinkedIn } from "@material-ui/icons";

import "./contacts.scss";

export default function Contacts() {
  const [message, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    const data = {
      Name: name,
      Email: email,
      Phone_Number: phoneNumber,
      Messages: messages,
    };
    axios
      .post(
        `https://sheet.best/api/sheets/38a9a2a7-d170-4040-9fd5-d3e7bd17ae41`,
        data
      )
      .then(() => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessages("");
      });
  };

  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>

        <div className="social-media">
          <a href="https://www.facebook.com/arshad.chowdhury23/" target="_blank" rel="noreferrer"><Facebook /></a>
          <a href="https://twitter.com/Arshaaaaaaaaaad" target="_blank" rel="noreferrer"><Twitter /></a>
         <a href="https://www.linkedin.com/in/md-arshad-67920b213/" target="_blank" rel="noreferrer"><LinkedIn /></a>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
          <textarea
            placeholder="Enter Your message here"
            required
            onChange={(e) => setMessages(e.target.value)}
            value={messages}
          ></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>
              <img src="assets/tick.png" alt="" /> Thanks, I'll get back to you
              as soon as I can
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
