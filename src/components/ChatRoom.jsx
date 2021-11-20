import ChatMessage from "./ChatMessage";
import React, { useState, useRef, useEffect } from "react";
import * as data from '../config.json';


export default function ChatRoom() {
  const dummy = useRef(null);
  const [messages, setMessage] = useState([]);
  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.uid === 1) {
      const placeHolder = {
        id: Math.random().toString(36).substr(2, 9),
        text: "thinking...",
        uid: 2,
      };
      setMessage([...messages, placeHolder]);
      dummy.current.scrollIntoView({ behavior: "smooth" });
      message(lastMsg.text);
    }
  });

  const message = async (msg) => {
    const url = `https://api.snowflakedev.org/api/chatbot?message=${msg}`;
    let res = await fetch(url, {
      headers: {
        Authorization: data.token,
      },
    });
    let json = await res.json();
    console.log(json);
    const airesp = json.message;
    const uid = 2;

    setMessage([
      ...messages,
      {
        id: "_" + Math.random().toString(36).substr(2, 9),
        text: airesp,
        uid,
      },
    ]);
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    let uid = 1;

    const newMsg = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      text: formValue,
      uid,
    };

    setMessage([...messages, newMsg]);
    setFormValue("");

    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <p></p>
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your text here!"
        />

        <button className="submit" type="submit" disabled={!formValue}>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </form>
    </>
  );
}
