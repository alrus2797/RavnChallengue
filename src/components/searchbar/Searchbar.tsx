import './Searchbar.scss';

import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg';
import {ReactComponent as BellIcon} from '../../assets/icons/bell.svg';
import propic from '../../assets/propic.png';

export default function Searchbar() {
    return (
        <div className="searchbar">
            <div className="searchbar-subcontainer">
                <SearchIcon className='search-label'/>
                <input type="text" placeholder="Search" className='search-input'/>
            </div>
            <div className="searchbar-subcontainer">
                <BellIcon className='searchbar-notification'/>
                <img src={propic} alt="Profile" className='searchbar-profile'/>
            </div>
        </div>
    );
}