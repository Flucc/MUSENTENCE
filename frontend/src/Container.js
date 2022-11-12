import React, { Component } from "react";
// Import all components needed from material UI
import { AppBar, Toolbar, IconButton, Box, Typography, Menu, MenuItem } from '@mui/material';
// Import the icon for menu dropdown
import SongDetails from "./components/SongDetails";

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    render(){
        return(
            <div className = "current-page">
                <SongDetails>
                Bruh
                </SongDetails>
            </div>
        );
    }
}
export default Container;