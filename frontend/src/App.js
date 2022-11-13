//Imported React and CSS 
import React, { useState, useEffect } from "react";
import './App.css';

//Imported our SongDetails and TextBox
import SongDetails from './components/SongDetails.js';
import TextBox from './components/TextBox';

//Functions 
function App() {

  const [fromText, setFromText] = useState({input:""});
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");
  const [uri, setUri] = useState("");
  const [imgUrl, setImgUrl] = useState('https://pursuit.ca/wp-content/uploads/2019/03/iStock-475567052-1024x1024.jpg');

  const changeState = () => {
    setFromText({input:""}); 
   };

  // Changes the artistName state variable
  const getArtist = (artist) => {
    setArtistName(artist);
  }

  // Changes the songName state variable
  const getSong = (song) => {
    setSongName(song);
  }

  // Changes the imgUrl state variable
  const getImg = (img) => {
    setImgUrl(img);
  }

  // Changes the uri state variable
  const getUri = (uri) => {
    setUri(uri);
  }

  return (
    <div className="App">
      <div className="text-box-container">
        {/* The song, artist, url, and uri are props that need to be passed into each component to de used and displayed */}
        <TextBox className="text-box" key={songName} song={getSong} artist={getArtist} url={getImg} uri={getUri}/>
      </div>
      <div className="song-detail-container">
        <SongDetails className="song-detail" key={artistName} song={songName} artist={artistName} url={imgUrl} uri={uri}/>
      </div>
    </div>
  );
}

export default App;
