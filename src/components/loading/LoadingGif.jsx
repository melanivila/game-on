import React from "react";
import './loading-gif.css';

function LoadingGif () { 
    const loadingGif = require("./characters-gif.gif")
    return (
    <div className="gif-style">
        <img src={loadingGif} alt="Cargando..."/>
    </div>
    )
};

export default LoadingGif;