import React, { useState,useEffect } from 'react'
import APIkit from "../../spotify"
import "./library.css"
import { IconContext } from 'react-icons';
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function Library() {
  const [playlists,setPlaylists] = useState(null)
  useEffect(() => {
    APIkit.get("me/playlists").then(function(response){
      setPlaylists(response.data.items);
    })
  }, [])

  const navigate = useNavigate();


  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });

  };
  
  return (
    <div className='screen-container'>
    <div className='library-body'>
    {playlists?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
                <IconContext.Provider value={{ size: "40px", color: "#E99D72" }}>
                <FaCirclePlay />
                </IconContext.Provider>
            </div>
          </div>
        ))}
    </div>
    </div>
  )
}

export default Library