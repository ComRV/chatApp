/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Chat from '../../components/layout/Chat';
import Settings from '../../components/Settings';
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const UserData = createContext();

const settings = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState([]);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`)
			.then((data) => {
				setUser(data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				Router.push('/');
			});
	}, []);
	return (
		<UserData.Provider value={[user, isLoading]}>
			<Chat>
				<Settings />
			</Chat>
		</UserData.Provider>
	);
};

export default settings;
