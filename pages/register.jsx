import Auth from '../components/layout/Auth';
import Head from 'next/head';
import Delayed from '../components/Delayed';

const register = () => {
	return (
		<>
			<Head>
				<title>P - Register</title>
			</Head>
			<Auth>
				<Delayed>
					<p className="text-center text-zinc-200 font-bold text-xl mt-10">REGISTER YOUR ACCOUNT</p>
					<form>
						<div className="flex flex-col">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Email</label>
							<input
								type="email"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								required="true"
							/>
						</div>
						<div className="flex flex-col mt-4">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Username</label>
							<input
								type="text"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								required="true"
							/>
						</div>
						<div className="flex flex-col my-4">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Password</label>
							<input
								type="password"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300"
								required="true"
							/>
						</div>
						<div className="flex flex-col">
							<button
								type="submit"
								className="bg-[#0d7477] w-[90%] m-auto h-[35px] rounded hover:bg-[#0d7477e0] active:bg-[#0d7477c0] duration-150 font-intertight tracking-wider text-sm font-medium"
							>
								Sign Up
							</button>
						</div>
					</form>
				</Delayed>
			</Auth>
		</>
	);
};

export default register;
