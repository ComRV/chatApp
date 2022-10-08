import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Inter+Tight&display=swap" rel="stylesheet"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
