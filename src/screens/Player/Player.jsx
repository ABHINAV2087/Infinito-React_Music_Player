import React from 'react'
import "./player.css"
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import { useState ,useEffect } from 'react';
import Songcard from '../../components/songCard/Songcard';
import Queue from '../../components/queue/Queue';
import Audioplayer from '../../components/audioplayer/Audioplayer';
import Widgets from '../../components/widgets/Widgets';

function Player() {

  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
 


  useEffect(() => {
    if (location.state) {
      apiClient
      .get("playlists/" + location.state?.id + "/tracks")
      .then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data?.items[0]?.track);
      });
    }
    
  }, [])
  
  return (
    <div className="screen-container flex">
    <div className="left-player-body">
      <Audioplayer
        currentTrack={currentTrack}
        total={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
    </div>
    <div className="right-player-body">
      <Songcard album={currentTrack?.album} />
      <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
    </div>
  </div>
  )
}

export default Player