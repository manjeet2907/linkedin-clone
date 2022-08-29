import React, { useState, useEffect, useRef } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './Scomponent/InputOptions';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';
import firebase from 'firebase';
import {db} from '../firebase';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Feeds() {
    const updatedMessage = useRef('')
    const user = useSelector(selectUser);
    // const [input , setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const sendPost = (e) => {
        e.preventDefault();
        let mess = updatedMessage.current.value
        
        db.collection("posts").add(
            {
            name: user.displayName,
            description: user.email,
            message: mess,
            photoUrl : user.photoUrl ||'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        ).then(
            updatedMessage.current.value =''
        )
    };

    useEffect(() => {
        db.collection("posts")
            .orderBy('timestamp','desc')
            .onSnapshot(snapshot => {
            setPosts(
                snapshot.docs.map((doc) => (
                    {
                    id: doc.id,
                    data: doc.data(),
                }
                ))

            )})
            }, []);

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon className="feed__icon" />
                    <form>
                        <input type="text" id='updatedMessage' ref={updatedMessage}
                        />

                        <button onClick= {sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={PhotoIcon} title="Photo" color="#1976D2" />
                    <InputOption Icon={YouTubeIcon} title="Video" color="#7FC15E" />
                    <InputOption Icon={EventIcon} title="Event" color="#E7A33E" />
                    <InputOption Icon={AssignmentIcon} title="Write Article" color="#FC9295" />
                </div>
            </div>
            <div className="post__container">
            <FlipMove>

                {posts.map(({id, data: { name, description, message ,photoUrl }}) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>



            </div>
        </div>
    )
}

export default Feeds;
