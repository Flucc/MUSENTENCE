import React, { useState, useEffect } from "react";
// Import react leaflet components
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks';
// Import Material UI components
import { Input, Button, Tooltip, Typography } from '@mui/material';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import axios from "axios";
//function
function SongDetails(){

    const [song, setSongValues] = useState([{name: "", artist: "", image: ""}])
    const [sentence, setSentence] = useState(null);
    const fetchTextFromField = () => {
        axios.get();
    }

    return(
        <div className ="song-details-page">
            <div className ="pre-song-select">
                <div className = "help-text">
                    <Typography className = "help" variant ="h2">
                        Enter a sentence in the box below!
                    </Typography>
                </div>
                <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                    <TextBoxComponent placeholder="Sentence goes here" cssClass="e-outline" floatLabelType="Auto"/>
                </div>
                    <div className = "button-wrapper">
                    <Tooltip title="Submit: " placement="center">
                        <Button
                        className="first-execute-button" 
                        onClick={() => {
                            //fetchTextFromField
                        }}
                        >
                            Bruh
                        </Button>
                      </Tooltip>
                    </div>

            </div>
            <div className ="post-song-select">
                    <div className = "song-name">
                        <Typography className = "help" variant ="h2">
                            {song !== null ? song.name : "Song Name"}
                        </Typography>
                    </div>
                    <div className = "song-artist">
                        <Typography className = "help" variant ="h3">
                            {song !== null ? song.artist : "Artist"}
                        </Typography>
                    </div>
                    <div className = "song-image">
                        <img className = "pic">
                            {song !== null ? song.image : "Artist"}
                        </img>
                    </div>

                    <div className = "text-box">
                        <Typography className = "help" variant ="h4">
                            {sentence};
                        </Typography>
                    </div>

                    <div className = "button-wrapper">
                        <Tooltip title="Submit: " placement="center">
                            <Button
                                className="retry-button" 
                                onClick={() => {
                                    //fetchNext();
                                }}
                                >
                                    Retry
                            </Button>
                        </Tooltip>
                    </div>
                    

            </div>    
        </div>
    );
}

export default SongDetails;