import { faSquarePlus } from '@fortawesome/pro-solid-svg-icons';
import { faHouseBlank, faMagnifyingGlass, faBooks } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
	return (
		<div className="text-gray-500">
			<div>
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
			</div>
		</div>
	);
};

export default Sidebar;