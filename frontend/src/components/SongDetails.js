import React, { useState, useEffect } from "react";
// Import react leaflet components
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks';
// Import Material UI components
import { Input, Button, Tooltip, Typography } from '@mui/material';
import axios from "axios";
//function
function SongDetails(props) {

    const [song, setSongValues] = useState([{name: "", artist: "", image: ""}])
    const [name, setName] = useState(null);
    const [artist, setArtist] = useState(null);
    const [image, setImage] = useState(null);
    const [spotifyurl, setSpotify] = useState(null);
    const [youtubeurl, setYoutube] = useState(null);
    const [appleurl, setApple] = useState(null);

    const url = 'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp';

    const fetchTextFromField = () => {
        axios.get();
        setName();
        setArtist();
        setImage();
        setSpotify(); //this is the url for spotify music link
        setYoutube(); //this is the url for youtube music link
        setApple(); //this is the url for apple music link
    }

    return(
        <div className ="song-details-page">
            <div className ="song-select">
                    <div className = "album-image">
                        <img class="song-image"
                            // src = "https://i.ebayimg.com/images/g/IR0AAOSwCJFh~qIU/s-l600.jpg"
                            src = "https://cdn.pixabay.com/photo/2017/11/06/15/52/blank-vinyl-record-jacket-2924018__480.jpg"
                        />
                    </div> 
                    <div className = "songlabel">
                        <Typography class = "songtitle" key={props.song}>
                            <b>SONG TITLE: </b>
                            {artist !== null ? artist.artist : props.song}
                        </Typography>
                    </div>
                    <div className = "artistlabel">
                        <Typography class = "artistTitle" key={props.artist}>
                            <b>ARTIST: </b>
                            {artist !== null ? artist.artist : props.artist}
                        </Typography>
                    </div>
                    <div className = "spotify-wrapper">
                            <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
                                <Button class = "spotify-button">
                                    <img class="spotify-image"
                                        src = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Spotify-icon.png"
                                    />
                                </Button>
                            </a>
                    </div>
                    <div className = "youtube-wrapper">
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <Button class = "youtube-button">
                                <img class="youtube-image"
                                    src="https://assets.website-files.com/618004e3fc784e8301aee92b/61b355910618d970f0de8967_SM_Icons-02.png"
                                />
                            </Button>  
                        </a>  
                    </div>
                    <div className = "applemusic-wrapper">
                        <a href="https://music.apple.com/us/browse" target="_blank" rel="noreferrer">
                            <Button class = "applemusic-button">
                                <img class="applemusic-image"
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Apple_Music_logo.png"
                                />
                            </Button>  
                        </a>  
                    </div>
            </div>  
        </div>
    );
}

export default SongDetails;