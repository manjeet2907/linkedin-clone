import React, { useState } from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setprofilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.displayName,
                profileUrl: userAuth.user.photoURL
            })
            );
        })
        .catch((error) => alert(error));
       
    };

    const register = () => {
        if (!name) {
            return alert('Please enter your full name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                            email:userAuth.user.email,
                            uid:userAuth.user.uid,
                            displayName:name,
                            photoUrl: profilePic,
                            })
                        );
                    })
            }).catch((error)=> alert(error));
    };

    
    return (
        <div className='login'>
            <LinkedIn className='linkedIn__Icon' />
            <form>
                <input value={name}
                    onChange={(e) => setName(e.target.value)} type="text" placeholder='Full Name(required if regestering)' />

                <input value={profilePic}
                    onChange={(e) => setprofilePic(e.target.value)} type="text" placeholder="Profile Picture Url" />

                <input value={email}
                    onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />

                <input value={password}
                    onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
                <p>Not Registered ? <span className="login__register" onClick={register}>Register Now</span></p>

            </form>

        </div>
    )
}

export default Login
