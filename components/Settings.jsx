import Conversation from './Conversation';
import profile from '../public/img/profile.jpg';
import Image from 'next/image';

const Settings = () => {
	return (
		<>
			<div className="basis-[100%] duration-150 md:basis-[35%] text-zinc-300 font-intertight tracking-wider lg:basis-[21%] flex flex-col border-r border-r-[#3b3b3b]">
				<div className="my-3 text-xl ml-4">Settings</div>
				<Image src={profile} alt="" className="" />
				<span className="flex place-items-center mt-3 ml-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-zinc-300">
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
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-zinc-300">
						<path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
					</svg>

					<div className="ml-5">
						<p className="-mb-1 text-lg">comrv</p>
						<p className="text-xs text-zinc-500">Username</p>
					</div>
				</span>
			</div>
			<Conversation />
		</>
	);
};

export default Settings;
