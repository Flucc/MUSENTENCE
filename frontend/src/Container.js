import React, { Component } from "react";
// Import all components needed from material UI
import { AppBar, Toolbar, IconButton, Box, Typography, Menu, MenuItem } from '@mui/material';
// Import the icon for menu dropdown
import SongDetails from "./components/SongDetails";
import TextBox from './components/TextBox';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 0
        }
    }
    render(){
        return(
            <div className = "current-page" active={this.state.active}>
                {/* <TextBox className={this.state.active === "tab1" ? "active" : ""}>

                </TextBox> */}
                <SongDetails className={this.state.active === "tab1" ? "active" : ""}>

                </SongDetails>
            </div>
        );
    }
}
export default Container;