import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
// import Logo from '../images/linkedlogo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Headeroption from './Scomponent/Headeroption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import avatar from '../images/avatar.jpg';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';


function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className="header__left">
                <div className="img">
                    <LinkedInIcon style={{ fontSize: '4rem', color: '#0A66C2' }} />

                </div>

                <div className="header__search">
                    <SearchIcon style={{ fontSize: '2.5rem' }} />
                    <input type="text" placeholder="Search" />

                </div>
            </div>
            <div className="header__right">
                <Headeroption Icon={HomeIcon} title="Home" />
                <Headeroption Icon={SupervisorAccountIcon} title="My Network" />
                <Headeroption Icon={BusinessCenterIcon} title="Jobs" />
                <Headeroption Icon={TextsmsIcon} title="Messaging" />
                <Headeroption Icon={NotificationsIcon} title="Notifications" />
                <Headeroption avatar={true} 
                title="Me"
                onClick={logoutOfApp}
                />

            </div>
        </div>
    )
}

export default Header;
