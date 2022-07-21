import React from "react";
import "./gamecard.styles.css";
import { Link } from "react-router-dom";
import GameConsoles from "../game-data/GameConsoles";

const GameCard = (game) => {
    const ratingStyle = `${
        game.rating > 3.5 ? "good" : game.rating < 3.5 && game.rating > 0 ? "bad" : "no"
    }-rating`;
    
    return (
        <div className="gamecard">            
            <Link to={`/${game.slug}`}>
                <img src={game.background_image ? game.background_image : "notfound.png"} alt={game.name}/>                       
            </Link>
            <div className="game-info">
                <h3 className="game-info">{game.name.length > 30 ? game.name.slice(0,30) + "..." : game.name}</h3>            
            <GameConsoles slug={game.slug}/>
            </div>
            <div className="game-overview">
                <h3>{game.name}</h3>    
                <p>Fecha de lanzamiento: {game.released}</p>
                <p>Rating: <span className={ratingStyle}>{game.rating}</span></p>
            </div>
        </div>
    )
}

export default GameCard;