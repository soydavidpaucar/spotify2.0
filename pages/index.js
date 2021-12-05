import Head from 'next/head';
import Center from '../components/Center.js';
import Sidebar from '../components/Sidebar.js';

export default function Home() {
	return (
		<div className="bg-black overflow-hidden">
			<Head>
				<title>Spotify 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main>
				{/* Sidebar */}
				<Sidebar />
				{/* Center */}
				<Center />
			</main>
			
			<div>{/* Player */}</div>
		</div>
	);
}
