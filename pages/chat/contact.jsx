/* eslint-disable react-hooks/rules-of-hooks */
import Chat from '../../components/layout/Chat';
import Contactlist from '../../components/Contactlist';
import Addfriend from '../../components/Addfriend';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AddFriend = createContext();

const contactlist = () => {
	const [isShow, setIsShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [contact, setContact] = useState([]);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/contactlist`)
			.then((data) => {
				setContact(data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				Router.push('/');
			});
	}, []);
	return (
		<>
			<AddFriend.Provider value={[{ isShow, setIsShow }, isLoading, contact]}>
				<Chat>
					<Contactlist />
				</Chat>
				{isShow && <Addfriend />}
			</AddFriend.Provider>
		</>
	);
};

export default contactlist;
