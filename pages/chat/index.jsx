import Head from 'next/head';
import Navbar from '../../components/Navbar';

const chat = () => {
	return (
		<>
			<Head>
				<title>P - Chat</title>
			</Head>
			<main className="bg-[#212121] flex h-screen min-w-full">
				<Navbar />
			</main>
		</>
	);
};

export default chat;
