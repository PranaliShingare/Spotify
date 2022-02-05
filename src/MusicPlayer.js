import React from "react";
import "./MusicPlayer.css";
import Navbar from "./Navbar";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function MusicPlayer() {
    
    return (
      <div className="body">
        <Navbar />
  
        <div className="body__info">
        <img src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_large.jpg" alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h1>Top 50-India</h1>
            <p>Your daily update of the most played tracks right now in India.</p>
          </div>
        </div>
  
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon
              className="body__shuffle"
            />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </div>
  
  
          
        </div>
      </div>
    );
  }
  
  export default MusicPlayer;
  