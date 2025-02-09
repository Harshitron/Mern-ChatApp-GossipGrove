// MessageContainer.jsx
import React, { useEffect } from 'react';
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelected authUser={authUser} />
      ) : (
        <>
          <div className="bg-base-300 p-4">
            <h2 className="text-xl font-semibold">
              Chat with <span className="text-primary">{selectedConversation.fullName}</span>
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = ({ authUser }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome, {authUser.fullName}!</h2>
      <p className="text-xl text-gray-500 mb-6">Select a chat to start messaging</p>
      <TiMessages className="text-8xl text-primary mx-auto" />
    </div>
  </div>
);

export default MessageContainer;