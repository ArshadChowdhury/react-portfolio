import "./contacts.scss";
import { useState } from "react";

export default function Contacts() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your message for Me"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Thanks, I'll get back to you as soon as I can</span>
          )}
        </form>
      </div>
    </div>
  );
}
