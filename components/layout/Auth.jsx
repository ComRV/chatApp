import Loading from '../Loading';
const Auth = ({ children }) => {
	return (
		<div className="bg-main h-screen text-white flex min-w-full container">
			<Loading>{children}</Loading>
		</div>
	);
};

export default Auth;
