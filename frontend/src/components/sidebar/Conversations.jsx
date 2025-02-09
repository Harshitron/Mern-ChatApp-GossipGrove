// Conversations.jsx
import React from 'react';
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex flex-col gap-2 py-2">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading && <span className="loading loading-spinner mx-auto my-4"></span>}
    </div>
  );
};

export default Conversations;