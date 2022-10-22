/* eslint-disable react-hooks/rules-of-hooks */
import Auth from '../components/layout/Auth';
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import ReactLoading from 'react-loading';

const register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isSuccess, setIsSuccess] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [msg, setMsg] = useState('');

	const registration = async (event) => {
		event.preventDefault();
		try {
			setIsLoading(true);
			const register = await axios.post('http://localhost:3000/api/registration', { username, password, confirmPassword });
			setIsLoading(false);
			const response = register.data;
			setMsg(response.msg);
			setIsSuccess(response.status);
			setTimeout(() => {
				Router.push('/');
			}, 3000);
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
				<title>P - Register</title>
			</Head>
			<Auth>
				<div className="text-white container w-2/3 rounded-md h-[11.5cm] m-auto border border-zinc-800 bg-[#212121] md:w-2/4 lg:w-1/3">
					<p className="text-center text-zinc-200 font-bold text-xl mt-10">REGISTER YOUR ACCOUNT</p>
					{!isSuccess && msg && <div className="py-2 px-3 mt-3 w-[90%] m-auto text-sm text-red-700 bg-red-100 rounded-md">{msg}</div>}
					{isSuccess && msg && <div className="py-2 px-3 mt-3 w-[90%] m-auto text-sm text-green-700 bg-green-100 rounded-lg">{msg}</div>}
					<form className="mt-3" onSubmit={registration}>
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
						<div className="flex flex-col my-4">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Confirm Password</label>
							<input
								type="password"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								required="true"
								placeholder="Confirm Password"
								onChange={(event) => setConfirmPassword(event.target.value)}
							/>
						</div>
						<div className="flex flex-col">
							<button
								type="submit"
								className="bg-[#0d7477] flex items-center justify-center w-[90%] gap-x-1 m-auto h-[35px] rounded hover:bg-[#0d7477e0] active:bg-[#0d7477c0] duration-150 font-intertight tracking-wider text-sm font-medium"
							>
								{isLoading && <ReactLoading type="spinningBubbles" color="#ffffff" height={'17px'} width={'17px'} />}
								<p>Sign Up</p>
							</button>
						</div>
					</form>
				</div>
			</Auth>
		</>
	);
};

export default register;
