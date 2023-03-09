import './Sidebar.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo className='sidebar-logo'/>
    </div>
  );
}
