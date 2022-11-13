import React, { useState, useEffect } from "react";
import './App.css';
import Container from './Container.js';
//import axios from "axios";

import SongDetails from './components/SongDetails.js';
import TextBox from './components/TextBox';

function App() {

  const [fromText, setFromText] = useState({input:""});
  const [artistName, setArtistName] = useState("Run the Program");
  const [songName, setSongName] = useState("Run the Program");

  const changeState = () => {  
    setFromText({input:""}); 
   };

  const getArtist = (artist) => {
    setArtistName(artist);
  }

  const getSong = (song) => {
    setSongName(song);
  }

  return (
    <div className="App">
      <div className="text-box-container">
      <TextBox className="text-box" key={songName} song={getSong} artist={getArtist}/>
      </div>
      <div className="song-detail-container">
      <SongDetails className="song-detail" key={artistName} song={songName} artist={artistName}>
      
      </SongDetails>
      </div>
    </div>
  );
}

export default App;
