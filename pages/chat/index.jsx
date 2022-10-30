/* eslint-disable react-hooks/rules-of-hooks */
import Chat from '../../components/layout/Chat';
import Contact from '../../components/Contact';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Router from 'next/router';

const chat = () => {
	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`)
			.then((data) => {})
			.catch((error) => {
				Router.push('/');
			});
	}, []);
	return (
		<Chat>
			<Contact />
		</Chat>
	);
};

export default chat;
