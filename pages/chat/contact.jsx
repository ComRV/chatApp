/* eslint-disable react-hooks/rules-of-hooks */
import Chat from '../../components/layout/Chat';
import Contactlist from '../../components/Contactlist';
import Addfriend from '../../components/Addfriend';
import { createContext, useState } from 'react';

export const AddFriend = createContext();

const contactlist = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<>
			<AddFriend.Provider value={{ isShow, setIsShow }}>
				<Chat>
					<Contactlist />
				</Chat>
				{isShow && <Addfriend />}
			</AddFriend.Provider>
		</>
	);
};

export default contactlist;
