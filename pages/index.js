import Head from 'next/head';
import Sidebar from '../components/Sidebar.js';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Spotify 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main>
				{/* Sidebar */}
				<Sidebar />
				{/* Center */}
			</main>
			
			<div>{/* Player */}</div>
		</div>
	);
}
