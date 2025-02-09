// Conversation.jsx
import React from 'react';
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex items-center gap-2 p-2 py-1 rounded-lg cursor-pointer transition-colors ${
          isSelected ? "bg-primary text-primary-content" : "hover:bg-base-200"
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic || "/placeholder.svg"} alt={`${conversation.fullName}'s avatar`} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{conversation.fullName}</h3>
        </div>
        <span className="text-xl">{emoji}</span>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;