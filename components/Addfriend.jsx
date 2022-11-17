import React from 'react';
import { useContext, useState } from 'react';
import { AddFriend } from '../pages/chat/contact';
import { Transition } from '@headlessui/react';
import ReactLoading from 'react-loading';
import axios from 'axios';

const Addfriend = () => {
	const { isShow, setIsShow } = useContext(AddFriend);
	const [status, setStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isExist, setIsExist] = useState(false);
	const [result, setResult] = useState({});
	const searchContact = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		const searching = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contactlist?id=${event.target.value}`);
		setIsLoading(false);
		setStatus(searching.data.status);
		setResult(searching.data.result);
		setIsExist(searching.data.result.exist);
	};
	const addcontact = async (id, event) => {
		try {
			event.preventDefault();
			await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contactlist`, { id });
			!isExist && setIsExist(true);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="fixed left-0 top-0 grid place-items-center w-screen h-screen z-10 bg-[#00000059]">
			<Transition
				className="w-1/2 h-[80%] md:h-[60%] bg-[#212121] text-zinc-200 rounded-md"
				show={isShow}
				enter="transition ease-in-out duration-150 transform"
				enterFrom="scale-0"
				enterTo="scale-1"
				leave="transition ease-in-out duration-150 transform"
				leaveFrom="scale-1"
				leaveTo="scale-0"
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
				<div className="mt-2.5 ml-3">
					<input
						type="text"
						placeholder="Search by ID"
						onChange={searchContact}
						className="text-zinc-200 w-[50%] lg:w-[75%] h-[30px] mr-2 tracking-wider duration-150 rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
					/>
					<button className="bg-[#0d7477] py-[0.35em] px-3 rounded hover:bg-[#0d7477e0] active:bg-[#0d7477c0] duration-150 font-intertight tracking-wider text-sm">Search by ID</button>
				</div>
				<div className="overflow-auto scrollbar-none text-zinc-200 h-[74.5%]">
					{isLoading ? (
						<div className="grid place-items-center h-full">
							<ReactLoading type="spin" color="#9f9f9f" />
						</div>
					) : status ? (
						<div className="flex items-center w-full mt-2 h-[50px] font-intertight tracking-wider">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-zinc-300 mx-2">
								<path
									fillRule="evenodd"
									d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
									clipRule="evenodd"
								/>
							</svg>
							<p className="text-[15px]">{result.nickname}</p>
							{isExist ? (
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1 ">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									onClick={(event) => addcontact(result.userId, event)}
									className="w-6 h-6 cursor-pointer ml-3 duration-150 hover:opacity-80 active:opacity-60"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
									/>
								</svg>
							)}
						</div>
					) : (
						<p className="place-content-center h-full grid font-intertight tracking-wider text-xl opacity-50">Contact not found</p>
					)}
				</div>
			</Transition>
		</div>
	);
};

export default Addfriend;
