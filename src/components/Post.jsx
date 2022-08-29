import React,{forwardRef} from 'react'
import { Avatar } from '@material-ui/core';
import InputOptions from './Scomponent/InputOptions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SmsIcon from '@material-ui/icons/Sms';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post = forwardRef(({ name, description, message, photoUrl },ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar className="post__headerIcon" src={photoUrl}>{name[0]} </Avatar> 
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltIcon} title ="Like" color="gray" />
                <InputOptions Icon={SmsIcon} title ="Comment" color="gray" />
                <InputOptions Icon={ShareIcon} title ="Share" color="gray" />
                <InputOptions Icon={SendIcon} title ="Send" color="gray" />
            </div>


        </div>
    );
})

export default Post

// useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     }
// }, [input]