import Navbar from '../Navbar';
import Contact from '../Contact';
import Conversation from '../Conversation';

const Chat = () => {
	return (
		<div className="bg-[#212121] flex flex-row h-screen min-w-full">
			<Navbar />
			<Contact />
			<Conversation />
		</div>
	);
};
export default Chat;
