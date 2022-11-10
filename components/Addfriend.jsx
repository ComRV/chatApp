import React from 'react';
import { useContext } from 'react';
import { AddFriend } from '../pages/chat/contact';
import { Transition } from '@headlessui/react';

const Addfriend = () => {
	const { isShow, setIsShow } = useContext(AddFriend);
	return (
		<div className="fixed left-0 top-0 grid place-items-center w-screen h-screen z-10 bg-[#00000059]">
			<Transition
				className="w-1/2 h-[80%] md:h-[60%] bg-[#212121] text-zinc-200 rounded-md"
				show={isShow}
				enter="transition ease-in-out duration-200 transform"
				enterFrom="scale-0"
				enterTo="scale-1"
				leave="transition ease-in-out duration-200 transform"
				leaveFrom="scale-0"
				leaveTo="scale-1"
				appear={true}
			>
				<div className="flex h-12	place-items-center border-b border-zinc-500 justify-between">
					<p className="text-xl ml-3">Add Friend</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => setIsShow(!isShow)}
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-6 h-6 mr-3 cursor-pointer duration-150 hover:opacity-80 active:opacity-60"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
				<div className="mt-2.5 ml-2">
					<input
						type="text"
						placeholder="Search by ID"
						className="text-zinc-200 w-[50%] lg:w-[75%] h-[30px] mr-2 tracking-wider duration-150 rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
					/>
					<button className="bg-[#0d7477] py-[0.35em] px-3 rounded hover:bg-[#0d7477e0] active:bg-[#0d7477c0] duration-150 font-intertight tracking-wider text-sm">Search by ID</button>
				</div>
				<div className="overflow-auto scrollbar-none text-zinc-200 h-full mt-3">
					<div className="flex items-center w-full h-[50px] font-intertight tracking-wider">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-zinc-300 mx-2">
							<path
								fillRule="evenodd"
								d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="text-[15px]">Rizky Duika</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6 cursor-pointer ml-3 duration-150 hover:opacity-80 active:opacity-60"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
							/>
						</svg>
					</div>
				</div>
			</Transition>
		</div>
	);
};

export default Addfriend;
