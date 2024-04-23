import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js";

export const sendMessage = async(req, res)=>{
    try {
        const {message} = req.body; // first we get the message as an input from the user
        const{id: receiverId} = req.params; // the id of the receiver from params
        const senderId = req.user._id; // the id of the sender from protectRoute

        // this function checks if there is any conversation between the receiver and the sender
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]}
        })

        // if no conversation is there then we create a conversation
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }   

        // after checking if the conversation is there then we create a newMessage
        const newMessage = new Message({
            senderId ,
            receiverId,
            message
        })

        // after creating the newMessage we push the newMessage id to the conversation
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // SOCKET IO FUNCTIONALLITY WOULD GO HERE

        // saving the conversation and message in the database.

        /* await conversation.save();
        await newMessage.save(); */

        // optimised way of  saving the conversation and message in the database.
        await Promise.all([conversation.save(), newMessage.save()])

        // after this we send the message as a response
        res.status(201).json(newMessage);



    } catch (error) {
        console.log("Error in sending sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
}

export const getMessages = async(req, res)=>{
    try {
        
        const {id: userToChatId} = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate("messages"); 
        // instead of message id we will get exact message because of populate it will be exact message instead of message reference

        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation.messages

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in sending getMessages controller: ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
}