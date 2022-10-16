import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Conversation from '../../components/Conversation';
import Contact from '../../components/Contact';
import { useState, createContext } from 'react';
import Settings from '../../components/Settings';

export const AppContext = createContext();

const Chat = () => {
	const [openProfile, setOpenProfile] = useState(false);
	return (
		<>
			<Head>
				<title>P - Chat</title>
			</Head>
			<main className="bg-[#212121] flex h-screen min-w-full">
				<AppContext.Provider value={{ openProfile, setOpenProfile }}>
					<Navbar />
					{openProfile ? <Settings /> : <Contact />}
					<Conversation />
				</AppContext.Provider>
			</main>
		</>
	);
};

export default Chat;
