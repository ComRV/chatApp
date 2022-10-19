import profile from '../public/img/profile.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Settings = () => {
	return (
		<>
			<div className="flex h-12	place-items-center justify-between">
				<p className="text-xl ml-3">Settings</p>
				<Link href="/chat">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-6 h-6 mr-3 cursor-pointer duration-150 hover:opacity-80 active:opacity-60"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</Link>
			</div>
			<Image src={profile} alt="" className="" />
			<span className="flex place-items-center mt-3 ml-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300">
					<path
						fillRule="evenodd"
						d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
						clipRule="evenodd"
					/>
				</svg>
				<div className="ml-5">
					<p className="-mb-1 text-lg">Rizky Duika</p>
					<p className="text-xs text-zinc-500">Nickname</p>
				</div>
			</span>
			<span className="flex place-items-center mt-3 ml-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-zinc-300">
					<path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
				</svg>

				<div className="ml-5">
					<p className="-mb-1 text-lg">comrv</p>
					<p className="text-xs text-zinc-500">Username</p>
				</div>
			</span>
		</>
	);
};

export default Settings;
