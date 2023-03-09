import './Topbar.scss'
import {ReactComponent as TilesIcon} from '../../assets/icons/tiles.svg';
import {ReactComponent as ListIcon} from '../../assets/icons/list.svg';
import {ReactComponent as PlusIcon} from '../../assets/icons/plus.svg';
import { NavLink } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-switcher">
                <NavLink to='/tasklist' className="sidebar-link">
                    <div className="topbar-switcher-item">
                        <ListIcon className='topbar-switcher-icon'/>
                    </div>
                </NavLink>

                <NavLink to='/' className="sidebar-link">
                    <div className="topbar-switcher-item">
                        <TilesIcon className='topbar-switcher-icon'/>
                    </div>
                </NavLink>
            </div>
            <div className="task-create-button">
                <PlusIcon className='task-create-icon'/>
            </div>
        </div>
    )
}