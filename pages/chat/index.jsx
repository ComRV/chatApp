/* eslint-disable react-hooks/rules-of-hooks */
import Chat from '../../components/layout/Chat';
import Contact from '../../components/Contact';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Router from 'next/router';

const chat = () => {
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`)
			.then((data) => {
				setIsLoading(false);
			})
			.catch((error) => {
				Router.push('/');
			});
	}, []);
	if (isLoading) return <div>Wait for authentification.........</div>;
	return (
		<Chat>
			<Contact />
		</Chat>
	);
};

export default chat;
