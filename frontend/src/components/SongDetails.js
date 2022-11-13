// Import react
import React, { useState, useEffect } from "react";

// Import Material UI components
import { Input, Button, Tooltip, Typography } from '@mui/material';

/**
* This function is how we set everything regarding songs in our project.
* We store each variable we get from later in order to change pictures Django.
*/
function SongDetails(props) {

    const [song, setSongValues] = useState([{name: "", artist: "", image: ""}])
    const [name, setName] = useState(null);
    const [artist, setArtist] = useState(null);
    const [image, setImage] = useState(null);

    const fetchTextFromField = () => {
        setName();
        setArtist();
        setImage();
    }

    return(

        /**
        * This is the entries for the entire side of the song page.
        * This will hold all of our elements like buttons and images. 
        */
        <div className ="song-details-page">
            <div className ="song-select">

                    {/* This will change from the data from python and DJango and*/}


                    <div id="id" className = "album-image" key={props.url}>
                        <a href={props.uri}>
                            <img class="song-image"
                                    src = {props.url}
                                />
                        </a>
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

                    {/* Streaming holds all the buttons on the bottom this will take us to the respective site when clicking it  */}

                    <div className = "streaming">
                        <div className = "spotify-wrapper">
                                <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
                                    <Button class = "spotify-button">
                                        <img class="spotify-image"
                                            src = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Spotify-icon.png"
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
                        <div className = "youtube-wrapper">
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                <Button class = "youtube-button">
                                    <img class="youtube-image"
                                        src="https://assets.website-files.com/618004e3fc784e8301aee92b/61b355910618d970f0de8967_SM_Icons-02.png"
                                    />
                                </Button>  
                            </a>  
                        </div>
                    </div>
            </div>  
        </div>
    );
}

export default SongDetails;