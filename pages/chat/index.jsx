/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Chat from '../../components/layout/Chat';
import Contact from '../../components/Contact';
import axios from 'axios';
import { useState, useEffect } from 'react';

const chat = () => {
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`).then((data) => {
			console.log(data.data);
			setIsLoading(false);
		});
	}, []);
	if (isLoading) return <div>Wait for authentification</div>;
	return (
		<Chat>
			<Contact />
		</Chat>
	);
};

export default chat;
