/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '../Navbar';
import Conversation from '../Conversation';
import { Transition } from '@headlessui/react';
import Head from 'next/head';
import axios from 'axios';
import { useEffect } from 'react';

export default function Chat({ children }) {
	return (
		<>
			<Head>
				<title>P - Chat</title>
			</Head>
			<main className="bg-[#212121] flex h-screen min-w-full">
				<Navbar />
				<Transition
					className="basis-[100%] md:basis-[35%] text-zinc-300 font-intertight tracking-wider lg:basis-[21%] flex flex-col border-r border-r-[#3b3b3b]"
					show={true}
					enter="transition ease-in-out duration-200 transform"
					enterFrom="translate-x-[-9cm]"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-200 transform"
					leaveFrom="translate-x-[-9cm]"
					leaveTo="translate-x-0"
					appear={true}
				>
					{children}
				</Transition>
				<Conversation />
			</main>
		</>
	);
}
