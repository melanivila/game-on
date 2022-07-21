import React from "react";
import './myprofile.css';

function ProfileGif () { 
    const loadingGif = require("./sonic-gif.gif")
    return (
    <div>
        <img className="gif-sonic-style mx-auto" src={loadingGif} alt="Sonic esperando..."/>
    </div>
    )
};

export default ProfileGif;