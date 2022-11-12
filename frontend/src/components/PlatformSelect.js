import React, { useState, useEffect } from "react";
//import './App.css';
import axios from "axios";
import { render } from "@testing-library/react";

function PlatformSelect() {
    //WE WILL GET THE LINK FROM THE PYTHON CODE

    const [position, setPosition] = useState(0); 

    const fetchPosition = () =>{
        return 0;
    }

    return (

        <div className="platformSelect-container">
            <div className="platformSelect-background">
                <div className="spotify-button">
                    <div className="button-icon">
                        <img src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=w600-h300-pc0xffffff-pd"></img>
                    </div>
                </div>

                <div className="youtube-button">
                    <div className="button-icon">
                        <img src="https://play-lh.googleusercontent.com/76AjYITcB0dI0sFqdQjNgXQxRMlDIswbp0BAU_O5Oob-73b6cqKggVlAiNXQAW5Bl1g"></img>
                    </div>
                </div>

                <div className="apple-button">
                    <div className="button-icon">
                        <img src="https://static.wikia.nocookie.net/logopedia/images/c/cb/Apple_Music_Icon_RGB_lg_073120.svg/revision/latest/scale-to-width-down/250?cb=20200921150442"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlatformSelect;