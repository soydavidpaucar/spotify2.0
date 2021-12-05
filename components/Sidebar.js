import { faSquareHeart, faSquarePlus, faSquareRss } from '@fortawesome/pro-solid-svg-icons';
import { faHouseBlank, faMagnifyingGlass, faBooks } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, useSession } from 'next-auth/react';

const Sidebar = () => {
	
	const { data: session, status } = useSession();
	console.log(session);
	return (
		<div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
			<div className="space-y-4">
				<button className="flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
					<p>Logout</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<FontAwesomeIcon icon={faHouseBlank} className="h-5 w-5" />
					<p>Home</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />
					<p>Search</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<FontAwesomeIcon icon={faBooks} className="h-5 w-5" />
					<p>Your Library</p>
				</button>
				
				<hr className="border-t-[0.1px] border-gray-900" />
				
				<button className="flex items-center space-x-2 hover:text-white">
					<FontAwesomeIcon icon={faSquarePlus} className="h-5 w-5" />
					<p>Create Playlist</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<FontAwesomeIcon icon={faSquareHeart} className="h-5 w-5" />
					<p>Liked Songs</p>
				</button>
				<button className="flex items-center space-x-2 hover:text-white">
					<FontAwesomeIcon icon={faSquareRss} className="h-5 w-5" />
					<p>Your Episodes</p>
				</button>
				
				<hr className="border-t-[0.1px] border-gray-900" />
				
				{/* Playlists */}
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
				<p className="cursor-pointer hover:text-white">Playlist Name</p>
			</div>
		</div>
	);
};

export default Sidebar;