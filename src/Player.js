import React from "react";
import "./Player.css";
import Playlist from "./Playlist";
import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";

function Player() {
    return (
      <div className="player">
        <div className="player__body">
        <Playlist />
        <MusicPlayer />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Player;
  