/* eslint-disable react-hooks/exhaustive-deps */
import profile from '../public/img/profile.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { UserData } from '../pages/chat/settings';
import { useContext } from 'react';
import ReactLoading from 'react-loading';

const Settings = () => {
	const user = useContext(UserData)[0];
	const isLoading = useContext(UserData)[1];
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
			{isLoading ? (
				<div className="grid place-items-center w-full h-full">
					<ReactLoading type="spin" color="#9f9f9f" />
				</div>
			) : (
				<>
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
							<p className="-mb-1 tracking-wider">{user.nickname}</p>
							<p className="text-xs text-zinc-500">Nickname</p>
						</div>
					</span>
					<span className="flex place-items-center mt-3 ml-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-zinc-300">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
							/>
						</svg>

						<div className="ml-5 ">
							<p className="-mb-1 tracking-wider">{user.userId}</p>
							<p className="text-xs text-zinc-500">User ID</p>
						</div>
					</span>
				</>
			)}
		</>
	);
};

export default Settings;
