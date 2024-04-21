import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <>
            {/*Header */}
            <div className='bg-slate-600 px-4 py-7 mb-3 text-2'>
                <span className='label-text text-lg'>To: </span>{"  "}
                <span className='font-semibold text-gray-100 text-2xl'> Harshit</span> 
            </div>

            <Messages />
            <MessageInput />

        </>
      
    </div>
  )
}

export default MessageContainer

