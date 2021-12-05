import { faChevronDown } from '@fortawesome/pro-solid-svg-icons';
import { useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState, } from '../atoms/playlistAtom.js';
import useSpotify from '../hooks/useSpotify.js';

const colors = [
	'from-indigo-500',
	'from-pink-500',
	'from-purple-500',
	'from-red-500',
	'from-blue-500',
	'from-green-500',
	'from-yellow-500',
];

const Center = () => {
	const { data: session } = useSession();
	const spotifyApi = useSpotify();
	const [color, setColor] = useState(null);
	const playlistId = useRecoilValue(playlistIdState);
	const [playlist, setPlaylist] = useRecoilState(playlistState);
	
	useEffect(() => {
		setColor(shuffle(colors).pop());
	}, [playlistId]);
	
	useEffect(() => {
		spotifyApi.getPlaylist(playlistId).then(data => {
			setPlaylist(data.body);
		}).catch(error => console.log('Something went wrong', error));
	}, [spotifyApi, playlistId]);
	
	console.log(playlist);
	
	return (
		<div className="flex-grow">
			<header className="absolute top-5 right-8">
				<div
					className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
					<img className="rounded-full w-10 h-10" src={session?.user.image} alt="User Profile" />
					<h2>{session?.user.name}</h2>
					<FontAwesomeIcon icon={faChevronDown} className="h-5 w-5" />
				</div>
			</header>
			
			<section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 w-full`}>
				<img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0]?.url} alt="" />
				<p>hello</p>
			</section>
		</div>
	);
};

export default Center;