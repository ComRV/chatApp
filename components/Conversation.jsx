import { useState } from 'react';
import { Transition } from '@tailwindui/react';

const Conversation = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<div className="basis-[0%] md:basis-[59%] hidden md:inline-block lg:basis-[75%] text-zinc-200 font-intertight tracking-wider">
			<div className="h-[7vh] border-b border-b-[#3b3b3b] flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-zinc-300 ml-2">
					<path
						fillRule="evenodd"
						d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
						clipRule="evenodd"
					/>
				</svg>
				<span className="flex flex-col ml-1">
					<p className="text-[13px] relative top-1">Rizky Duika</p>
					<p className="text-[11px] relative text-zinc-500 font-light">10 minute ago</p>
				</span>
				<div className="absolute left-[95%] lg:left-[97%]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 cursor-pointer active:opacity-80"
						onClick={() => setIsShow(!isShow)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
						/>
					</svg>
					<Transition
						show={isShow}
						enter="transition-opacity duration-150"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<ul className="absolute top-[0.75cm] right-[5px] rounded-md text-sm bg-[#323232]">
							<li>
								<a href="#" className="block py-2 px-7 duration-150 rounded-t-md hover:bg-[#4e4e4ee3]">
									Report
								</a>
							</li>
							<li>
								<a href="#" className="block py-2 px-7 duration-150 rounded-b-md hover:bg-[#4e4e4ee3]">
									Block
								</a>
							</li>
						</ul>
					</Transition>
				</div>
			</div>

			<div className="m-5 h-[89vh] scrollbar-none overflow-auto">
				<div className="flex my-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5 justify-end">
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
							<path
								fillRule="evenodd"
								d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5 justify-end">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5 justify-end">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5 justify-end">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
				<div className="flex my-5 justify-end">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-zinc-300 self-center">
						<path
							fillRule="evenodd"
							d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="bg-[#0D7377] ml-1 max-w-[5.4cm] lg:max-w-[7cm] rounded-lg">
						<p className="break-words px-2 pt-1 text-sm">halo nama saya rizky duika mohon bantuannya</p>
						<p className="text-right px-2 pb-1 text-xs">23.59</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Conversation;
