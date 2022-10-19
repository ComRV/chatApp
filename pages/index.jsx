import Auth from '../components/layout/Auth';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>P - Login</title>
			</Head>
			<Auth>
				<p className="text-center mt-10 font-roboto font-semibold text-sm text-zinc-600">WELCOME BACK</p>
				<p className="text-center text-zinc-200 font-bold text-xl">LOGIN INTO YOUR ACCOUNT</p>
				<form className="mt-6">
					<div className="flex flex-col">
						<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Username</label>
						<input
							type="text"
							className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
							required="true"
							placeholder="Username"
						/>
					</div>
					<div className="flex flex-col my-4">
						<label className="font-intertight tracking-wider text-sm text-zinc-300 ml-[5%]">Password</label>
						<input
							type="password"
							className="w-[90%] h-[2.5em] tracking-wider duration-150 mt-1 m-auto rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300"
							required="true"
							placeholder="Password"
						/>
					</div>
					<div className="flex flex-col">
						<button
							type="submit"
							className="bg-[#0d7477] w-[90%] m-auto h-[35px] rounded hover:bg-[#0d7477e0] active:bg-[#0d7477c0] duration-150 font-intertight tracking-wider text-sm font-medium"
							required="true"
						>
							Sign In
						</button>
						<p className="font-intertight tracking-wider font-zinc-200 text-xs ml-[5%] mt-1">
							Dont have an account?
							<Link href="/register">
								<p className="inline cursor-pointer text-[#0d7477] hover:text-[#198185]"> Sign Up</p>
							</Link>
						</p>
					</div>
				</form>
			</Auth>
		</>
	);
}
