import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import Widgets from './components/Widgets';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user Logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,

        })
        );
      } else {
        // user not logged in
        dispatch(logout());
      }
    })
/* eslint-disable */
  },[] ); 
/* eslint-enable */


  return (
    <div className="app">

      {/* header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="appBody">

          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feeds />
          {/* widgets */}
          <Widgets />
        </div>
      )
      }

    </div>
  );
}

export default App;
