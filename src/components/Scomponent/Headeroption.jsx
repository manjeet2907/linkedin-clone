import React from 'react'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Headeroption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    // const topImage = ()=>{
    //     if(user){
    //         if(user.photoUrl) {
    //         return(user.photoUrl);
    //         }else{
    //             return(user.email[0]);
    //             }
    //     }else{
    //         return({avatar});
    // }
    // }

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className='headerOption__icon' />}

            {avatar &&
                <Avatar className='headerOption__icon'>{user?.email[0]}</Avatar>}
            
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default Headeroption;
