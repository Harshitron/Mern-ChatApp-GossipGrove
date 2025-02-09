// Messages.jsx
import React, { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className="flex flex-col gap-4 p-4">
      {!loading && messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      ) : !loading && messages.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">Send a message to start the conversation</p>
      ) : (
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
      )}
    </div>
  );
};

export default Messages;