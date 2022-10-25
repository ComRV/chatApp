import Auth from '../components/layout/Auth';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import ReactLoading from 'react-loading';

export default function Home() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isStay, setIsStay] = useState(false);
	const [isSuccess, setIsSuccess] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [msg, setMsg] = useState('');

	const auth = async (event) => {
		event.preventDefault();
		try {
			setIsLoading(true);
			const auth = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, { username, password, isStay });
			setIsLoading(false);
			Router.push('/chat');
		} catch (error) {
			setIsLoading(false);
			const response = error.response.data;
			setMsg(response.msg);
			setIsSuccess(response.status);
		}
	};

	return (
		<>
			<Head>
				<title>P - Login</title>
			</Head>
			<Auth>
				<div className="text-white container w-2/3 rounded-md h-[10.6cm] m-auto border border-zinc-800 bg-[#212121] md:w-2/4 lg:w-1/3">
					<p className="text-center mt-10 font-roboto font-semibold text-sm text-zinc-600">WELCOME BACK</p>
					<p className="text-center text-zinc-200 font-bold text-xl">LOGIN INTO YOUR ACCOUNT</p>
					{!isSuccess && msg && <div className="py-2 px-3 mt-3 w-[90%] m-auto text-sm text-red-700 bg-red-100 rounded-md">{msg}</div>}
					<form className="mt-3" onSubmit={auth}>
						<div className="flex flex-col">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Username</label>
							<input
								type="text"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								required="true"
								placeholder="Username"
								onChange={(event) => setUsername(event.target.value)}
							/>
						</div>
						<div className="flex flex-col mt-4">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Password</label>
							<input
								type="password"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								required="true"
								placeholder="Password"
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>
						<div className="flex mt-1 ml-[5%] mb-3">
							<input
								type="checkbox"
								className="tracking-wider accent-[#0d7477] duration-150 rounded border border-zinc-500 bg-transparent focus:ring-zinc-300"
								id="stay"
								onChange={() => setIsStay(!isStay)}
							/>
							<label htmlFor="stay" className="font-intertight tracking-wider text-xs ml-1 text-zinc-300">
								Stay signed in
							</label>
						</div>
						<div className="flex flex-col">
							<button
								type="submit"
								className="bg-[#0d7477] flex items-center justify-center w-[90%] gap-x-1 m-auto h-[35px] rounded hover:bg-[#0d7477e0] active:bg-[#0d7477c0] duration-150 font-intertight tracking-wider text-sm font-medium"
							>
								{isLoading && <ReactLoading type="spinningBubbles" color="#ffffff" height={'17px'} width={'17px'} />}
								<p>Sign In</p>
							</button>
							<p className="font-intertight tracking-wider font-zinc-200 text-xs ml-[5%] mt-1">
								Dont have an account?
								<Link href="/register">
									<p className="inline cursor-pointer text-[#0d7477] hover:text-[#198185]"> Sign Up</p>
								</Link>
							</p>
						</div>
					</form>
				</div>
			</Auth>
		</>
	);
}
