import React, { useState, useEffect } from "react";
// Import react leaflet components
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks';
// Import Material UI components
import { Input, Button, Tooltip, Typography } from '@mui/material';
import axios from "axios";
import logo from "../logo3.png";
//function
const TextBox = (props) => {
    const [input, setInput] = useState(" ");
    const [uri, setUri] = useState("");
    const [artist, setArtist] = useState("Run the Program");
    const [song, setSong] = useState("Run the Program");

    // stores input field value
    const handleInput = event => {
        setInput(event.target.value);
    }

    // React.useEffect(() => {
    //     //fetch(`http://localhost:8000/sentence/${input}`)
    //     fetch(`http://localhost:8000/sentence/${input}`)
    //     .then((response) => response.json())
    // });

    const handleSubmit = (e) => {
        fetch(`http://localhost:8000/sentence/${input}/`)
        .then((response) => response.text())
        .then((text) => {
            setUri(text);
        });
        var songArray = uri.split('/');
        console.log("reached");
        console.log(songArray[4]);
        console.log(songArray[6]);
        var artist = songArray[4].replace(/%2b/g, " ");
        var toBes = songArray[6].replace(/%2b/g, " ");
        console.log(toBes);
        var frontperen = toBes.replace(/%2528/g, "(");
        console.log(frontperen);
        var song = frontperen.replace(/%2529/g, ")");
        console.log(artist);
        console.log(song);
        props.song(song);
        props.artist(artist);
        //fetch("http://ws.audioscrobbler.com/2.0")
    }

    console.log(uri);
    

    //props.input({input});

    return(
        <div className ="text-box-page">
            <div className ="pre-song-select">
                <div className = "help-text">
                    <img class="logo-image"
                         src = {logo}
                    />
                </div>
                <div className = "description">
                    <Typography className = "summary" variant ="h7">
                        The perfect song from the description of your choice:
                    </Typography>
                </div>    

                <form action="/sentences/" method="GET">

                    <input 
                        // textbox input we need to send this to stefan
                        className = "text-input-box"
                        type="text"
                        onChange={handleInput} // changes sentence when it gets inputted
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