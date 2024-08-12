import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Library from '../Library/Library';
import Feed from '../Feed/Feed';
import Trending from '../Trending/Trending';
import Favorites from '../Favorites/Favorites';
import Player from '../Player/Player';
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Login from '../auth/Login';
import { setClientToken } from '../../spotify';

function Home() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if(!token && hash){
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token)
        }else{
            setToken(token);
            setClientToken(token);
        }
    }, [])

    return !token ? (
        <Login />
    ) : (
            <Router>
                <div className='main-body'>

                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<Library />} />
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/library' element={<Library />} />
                        <Route path='/trending' element={<Trending />} />
                        <Route path='/favorites' element={<Favorites />} />
                        <Route path='/player' element={<Player />} />
                    </Routes>
                </div>
            </Router>
        );
}

export default Home;
