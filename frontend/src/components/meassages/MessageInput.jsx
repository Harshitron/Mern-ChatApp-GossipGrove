// MessageInput.jsx
import React, { useState } from 'react';
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-base-200">
      <div className="input-group">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          {loading ? <span className="loading loading-spinner"></span> : <BsSend className="w-5 h-5" />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;