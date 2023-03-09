import './Sidebar.scss';
import '../../styles/sharedStyles.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg';

import {ReactComponent as ListIcon} from '../../assets/icons/list.svg';
import {ReactComponent as TilesIcon} from '../../assets/icons/tiles.svg';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo className='sidebar-logo'/>
      <div className="sidebar-tab-list">
        <NavLink to='/' className="sidebar-link">
          <div className="sidebar-tab">
            <TilesIcon className='sidebar-tab-icon'/>
            <div className="sidebar-tab-title">
              DASHBOARD
            </div>
            <div className="sidebar-tab-rectangle"></div>
          </div>
        </NavLink>

        <NavLink to='/tasklist' className="sidebar-link">
          <div className="sidebar-tab">
            <ListIcon className='sidebar-tab-icon'/>
            <div className="sidebar-tab-title">
              MY TASK
            </div>
            <div className="sidebar-tab-rectangle"></div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
