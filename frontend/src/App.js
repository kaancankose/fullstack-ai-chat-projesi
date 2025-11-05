import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000/api/messages"; // .NET backend
const AI_URL = "http://localhost:7860/run/predict"; // Hugging Face AI service

function App() {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_URL).then((res) => setMessages(res.data));
  }, []);

  const handleSend = async () => {
    if (!message.trim() || !nickname.trim()) return;

    try {
      const aiRes = await axios.post(AI_URL, { data: [message] });
      const sentiment = aiRes.data.data[0];

      const msgObj = { nickname, text: message, sentiment };
      await axios.post(BACKEND_URL, msgObj);

      setMessages((prev) => [...prev, msgObj]);
      setMessage("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h1>💬 AI Chat with Sentiment</h1>

      {!nickname ? (
        <div style={styles.login}>
          <input
            type="text"
            placeholder="Enter your nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
      ) : (
        <>
          <div style={styles.chatBox}>
            {messages.map((m, i) => (
              <div key={i} style={styles.message}>
                <strong>{m.nickname}:</strong> {m.text}{" "}
                <span style={styles.sentiment(m.sentiment)}>
                  ({m.sentiment})
                </span>
              </div>
            ))}
          </div>

          <div style={styles.inputArea}>
            <input
              type="text"
              placeholder="Type message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: "30px auto",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  chatBox: {
    height: 300,
    overflowY: "scroll",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: 8,
  },
  message: { margin: "5px 0" },
  inputArea: { display: "flex", gap: 10 },
  sentiment: (s) => ({
    color:
      s === "positive"
        ? "green"
        : s === "negative"
        ? "red"
        : "gray",
    fontSize: 12,
  }),
};

export default App;
