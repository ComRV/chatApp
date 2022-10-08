import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

const Delayed = ({ children, waitBeforeShow = 1000 }) => {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsShown(true);
		}, waitBeforeShow);

		return () => clearTimeout(timer);
	}, [waitBeforeShow]);

	return isShown ? (
		children
	) : (
		<div className="grid place-items-center w-full h-full">
			<ReactLoading type="spin" color="#9f9f9f" />
		</div>
	);
};

export default Delayed;
