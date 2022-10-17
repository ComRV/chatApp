import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Conversation from '../../components/Conversation';
import Contact from '../../components/Contact';
import { useState, createContext, useEffect } from 'react';
import Settings from '../../components/Settings';
import { Transition } from '@headlessui/react';

export const AppContext = createContext();

const Chat = () => {
	const [openProfile, setOpenProfile] = useState(false);
	const [openContact, setOpenContact] = useState(true);
	return (
		<>
			<Head>
				<title>P - Chat</title>
			</Head>
			<main className="bg-[#212121] flex h-screen min-w-full">
				<AppContext.Provider
					value={[
						{ openProfile, setOpenProfile },
						{ openContact, setOpenContact },
					]}
				>
					<Navbar />
					<Transition
						className="basis-[100%] md:basis-[35%] text-zinc-300 font-intertight tracking-wider lg:basis-[21%] flex flex-col border-r border-r-[#3b3b3b]"
						show={openContact}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="translate-x-[-9cm]"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-[-9cm]"
						leaveTo="translate-x-0"
					>
						<Contact />
					</Transition>
					<Transition
						className="basis-[100%] md:basis-[35%] text-zinc-300 font-intertight tracking-wider lg:basis-[21%] flex flex-col border-r border-r-[#3b3b3b]"
						show={openProfile}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="translate-x-[-9cm]"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-[-9cm]"
						leaveTo="translate-x-0"
						unmount={true}
					>
						<Settings />
					</Transition>
					<Conversation />
				</AppContext.Provider>
			</main>
		</>
	);
};

export default Chat;
