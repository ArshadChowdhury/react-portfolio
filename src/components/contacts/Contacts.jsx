import "./contacts.scss";
import { useState } from "react";
import axios from "axios";

export default function Contacts() {
  const apiKey = process.env.REACT_APP_API_KEY;
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
    axios.post(apiKey, data).then(() => {
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
