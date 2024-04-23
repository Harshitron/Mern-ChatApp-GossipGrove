import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		console.log("What happened?");
		const getMessages = async () => {
			setLoading(true);
			try {

				if (!selectedConversation) {
                    // Handle case where no conversation is selected
					console.log("No conversation selected");
                    setMessages([]); // Clear messages
                    setLoading(false); // Set loading to false
                    return;
                }

				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				console.log("reached here")
				const data = await res.json();
				console.log("Fetched Data:", data); // Log fetched data
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				console.error("Fetch Error:", error);
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;