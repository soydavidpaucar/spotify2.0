import { faVolumeLow } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBackwardStep, faCirclePause,
	faCirclePlay,
	faForwardStep,
	faRepeat, faShuffle, faVolumeHigh
} from '@fortawesome/pro-solid-svg-icons';
import { debounce } from 'lodash';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom.js';
import useSongInfo from '../hooks/useSongInfo.js';
import useSpotify from '../hooks/useSpotify.js';

const Player = () => {
	const spotifyApi = useSpotify();
	const { data: session, status } = useSession();
	const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
	const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
	const [volume, setVolume] = useState(50);
	
	const songInfo = useSongInfo();
	const fetchCurrentSong = () => {
		if (!songInfo) {
			spotifyApi.getMyCurrentPlayingTrack().then(data => {
				console.log('Now playing', data.body?.item);
				setCurrentTrackId(data.body?.item?.id);
				
				spotifyApi.getMyCurrentPlaybackState().then(data => {
					setIsPlaying(data.body?.is_playing);
				});
			});
		}
	};
	
	const handlePlayPause = () => {
		spotifyApi.getMyCurrentPlaybackState().then(data => {
			if (data.body.is_playing) {
				spotifyApi.pause();
				setIsPlaying(false);
			} else {
				spotifyApi.play();
				setIsPlaying(true);
			}
		});
	};
	
	useEffect(() => {
		if (spotifyApi.getAccessToken() && !currentTrackId) {
			fetchCurrentSong();
			setVolume(50);
		}
	}, [currentTrackId, spotifyApi, session]);
	
	useEffect(() => {
		if (volume > 0 && volume < 100) {
			debouncedAdjustVolume(volume);
		}
	}, [volume]);
	
	const debouncedAdjustVolume = useCallback(
		debounce(volume => {
			spotifyApi.setVolume(volume);
		}, 10), []
	);
	
	return (
		<div
			className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
			<div className="flex items-center space-x-4">
				<img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0]?.url} alt={songInfo?.name} />
				<div>
					<h3>{songInfo?.name}</h3>
					<p className="text-xs text-gray-400">{songInfo?.artists?.[0]?.name}</p>
				</div>
			</div>
			
			<div className="flex items-center justify-evenly">
				<FontAwesomeIcon className="button" icon={faShuffle} />
				<FontAwesomeIcon className="button" icon={faBackwardStep} />
				
				{isPlaying ? (
					<FontAwesomeIcon onClick={handlePlayPause} className="button w-10 h-10" icon={faCirclePause} />
				) : (
					<FontAwesomeIcon onClick={handlePlayPause} className="button w-10 h-10" icon={faCirclePlay} />
				)}
				
				<FontAwesomeIcon className="button" icon={faForwardStep} />
				<FontAwesomeIcon className="button" icon={faRepeat} />
			</div>
			
			<div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
				<FontAwesomeIcon onClick={() => volume > 0 && setVolume(volume - 10)} className="button" icon={faVolumeLow} />
				<input className="w-14 md:w-28" type="range" value={volume} min={0} max={100}
							 onChange={e => setVolume(Number(e.target.value))} />
				<FontAwesomeIcon onClick={() => volume < 100 && setVolume(volume + 10)} className="button"
												 icon={faVolumeHigh} />
			</div>
		</div>
	);
};

export default Player;