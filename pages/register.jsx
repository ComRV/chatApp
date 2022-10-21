import Auth from '../components/layout/Auth';
import Head from 'next/head';

const register = () => {
	return (
		<>
			<Head>
				<title>P - Register</title>
			</Head>
			<Auth>
				<div className="text-white container w-2/3 rounded-md h-[11.5cm] m-auto border border-zinc-800 bg-[#212121] md:w-2/4 lg:w-1/3">
					<p className="text-center text-zinc-200 font-bold text-xl mt-10">REGISTER YOUR ACCOUNT</p>
					<div className="py-2 px-3 mt-3 w-[90%] m-auto text-sm text-red-700 bg-red-100 rounded-md dark:bg-red-200 dark:text-red-800" role="alert">
						Change a few things up and try submitting again.
					</div>
					<form className="mt-3">
						<div className="flex flex-col">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Username</label>
							<input
								type="text"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								required="true"
								placeholder="Username"
							/>
						</div>
						<div className="flex flex-col mt-4">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Password</label>
							<input
								type="password"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								required="true"
								placeholder="Password"
							/>
						</div>
						<div className="flex flex-col my-4">
							<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Confirm Password</label>
							<input
								type="password"
								className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								required="true"
								placeholder="Confirm Password"
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
				</div>
			</Auth>
		</>
	);
};

export default register;
