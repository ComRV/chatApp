import React from 'react';

const Auth = ({ children }) => {
	return (
		<div className="bg-main h-screen text-white flex min-w-full container">
			<div className="text-white container w-1/3 rounded-md h-[55%] m-auto border border-zinc-800 bg-[#212121]">{children}</div>
		</div>
	);
};

export default Auth;
