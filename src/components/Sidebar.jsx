import React from 'react'
import { Avatar } from '@material-ui/core';
import bgimage from '../images/bgtop.jpg';
// import dp from '../images/avatar.jpg';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';

function Sidebar() {
    const user =useSelector(selectUser);


    const recentItem = (topic) => (
        <div className="sidebar__recentitem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={bgimage} alt="top bg" />
                <Avatar className="sidebar__avatar" src={user.photoUrl}>
                {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">32</p>
                </div>
                <div className="sidebar__stat">
                    <p>Connection</p>
                    <p className="sidebar__statNumber">195</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <h4>Recents</h4>
               {recentItem('react')}
               {recentItem('Programming')}
               {recentItem('Web Dev')}
               {recentItem('redux')}
               {recentItem('react Native')}
            </div>

        </div>
    )
}

export default Sidebar
