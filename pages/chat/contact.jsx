/* eslint-disable react-hooks/rules-of-hooks */
import Chat from '../../components/layout/Chat';
import Contactlist from '../../components/Contactlist';
import { createContext, useState } from 'react';

export const AddFriend = createContext();

const contactlist = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<>
			<AddFriend.Provider value={{ isShow, setIsShow }}>
				<Chat>
					<Contactlist />
				</Chat>
				{isShow && (
					<div className="fixed left-0 top-0 grid place-items-center w-screen h-screen z-10 bg-[#00000059]">
						<div className="w-1/2 h-[60%] bg-[#212121] text-zinc-200 rounded-md">
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
									className="text-zinc-200 w-[81%] h-[30px] mr-2 tracking-wider duration-150 rounded border border-zinc-500 bg-transparent pl-2 text-sm focus:ring-zinc-300 font-intertight"
								/>
								<button className="bg-[#0d7477] h-[30px] px-3 rounded hover:bg-[#0d7477e0] active:bg-[#0d7477c0] duration-150 font-intertight tracking-wider text-sm">
									Search by ID
								</button>
							</div>
						</div>
					</div>
				)}
			</AddFriend.Provider>
		</>
	);
};

export default contactlist;
