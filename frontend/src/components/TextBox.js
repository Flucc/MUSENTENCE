// Import react
import React, { useState, useEffect } from "react";

// Import Material UI components
import { Input, Button, Tooltip, Typography } from '@mui/material';

// Import Logo for our project
import logo from "../logo31.png";

//function
const TextBox = (props) => {
    const [input, setInput] = useState(" ");
    const [uri, setUri] = useState("");
    const [artist, setArtist] = useState("");
    const [img, setImg] = useState("");
    
    // stores input field value
    const handleInput = event => {
        setInput(event.target.value);
    }
    
    const handleSubmit = (e) => {

        // Fetches the last.fm song link from the last.fm API
        // The fetch link is the track.getInfo lastfm API url
        fetch(`http://localhost:8000/sentence/${input}/`)
        .then((response) => response.text())
        .then((text) => {
            setUri(text);
        });
        // Passes the uri to the parent component (App)
        props.uri(uri);

        // Get the song and artist name from the link
        // Create an array that splices the link by /
        var songArray = uri.split('/');

        // The fourth cut portion contains the artist name
        // The sixth portion contains the song name
        // Switch out %values for their respetive characters
        var artist = songArray[4].replace(/%2b/g, " ");
        artist = artist.replace(/%2527/g, "'");
        artist = artist.replace("+", " ");
        artist = artist.replace(/%2526/g, "&");
        artist = artist.replace(/%252C/g, ",");

        var song = songArray[6].replace(/%2b/g, " ");
        song = song.replace(/%2528/g, "(");
        song = song.replace(/%2529/g, ")");
        song = song.replace(/%2527/g, "'");
        song = song.replace(/%255b/g, "[");
        song = song.replace(/%255d/g, "]");
        song = song.replace(/%2526/g, "&");
        song = song.replace("+", " ");
        song = song.replace(/%252C/g, ",");
        
        // Pass the song and artist name to the parent (App)
        props.song(song);
        props.artist(artist);
        var img;
        // Fetch's the track data
        // The fetch link is the album.trackInfo lastfm API url
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=3215ae7d1352743c3bc40b5fedb0aa53&artist=${artist}&track=${song}&format=json`)
        .then((response) => response.json())
        .then((json) => {
            // Set img to the link to the album image
            img = json["track"]["album"].image[3]['#text'];
            console.log("Here: "+ img);
            if(img) setImg(img);
            props.url(img);
            console.log()
        });
    }

    return(
        <div className ="text-box-page">
            <div className ="pre-song-select">
                <div className = "help-text">
                    <img class="logo-image"
                        src = {logo}
                    />
                </div> 
                <form action="/sentences/" method="GET">
                    <input 
                        className = "text-input-box"
                        type="text"
                        onChange = {handleInput} //changes the sentence when it gets inputted
                        placeholder="Enter your sentence here!"
                    />
                      <div className = "submit-button-wrapper">
                        <Button
                            class="submit-button"
                            onClick={handleSubmit}
                            >
                            SUBMIT
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default TextBox;