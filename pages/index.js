import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Center from '../components/Center.js';
import Player from '../components/Player.js';
import Sidebar from '../components/Sidebar.js';

export default function Home() {
	return (
		<div className="bg-black overflow-hidden">
			<Head>
				<title>Spotify 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main className="flex">
				{/* Sidebar */}
				<Sidebar />
				{/* Center */}
				<Center />
			</main>
			
			<div>
				{/* Player */}
				<Player />
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	
	return {
		props: {
			session
		}
	};
}