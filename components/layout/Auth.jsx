import Loading from '../Loading';
const Auth = ({ children }) => {
	return (
		<div className="bg-main h-screen text-white flex min-w-full container">
			<Loading>
				<div className="text-white container w-2/3 rounded-md h-[9.8cm] m-auto border border-zinc-800 bg-[#212121] md:w-2/4 lg:w-1/3">{children}</div>
			</Loading>
		</div>
	);
};

export default Auth;
