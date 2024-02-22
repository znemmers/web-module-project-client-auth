import React from 'react';
import './App.css';
import { Routes, Route, Link, Redirect } from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/FreindsList';
import AddFriend from './Components/AddFriends';
import Logout from './Components/Logout';

function App() {
  return (
    <div className="App">
      <header>
        <h2>FriendsDatabase</h2>
      <Link className = 'link' to='login'>Login</Link>
      <Link className = 'link' to='friends'>Friends List</Link>
      <Link className = 'link' to='friends/add'>Add Friends</Link>
      <Link className = 'link' to='logout'>Logout</Link>
      </header>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/friends' element={<FriendsList />} />
        <Route path='/friends/add' element={<AddFriend />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
