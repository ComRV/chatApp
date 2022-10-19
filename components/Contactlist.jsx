import Link from 'next/link';

const Contactlist = () => {
	return (
		<>
			<div className="flex h-12	place-items-center justify-between">
				<p className="text-xl ml-3">List Contact</p>
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
		</>
	);
};

export default Contactlist;
