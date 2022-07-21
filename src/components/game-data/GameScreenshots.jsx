import React, {useEffect, useState} from "react";
import './game-data.css';
import {apiKey} from "../../constants/index";
import {useParams} from "react-router-dom";

const GameScreenshots = ({background_image}) => {    
    const { slug } = useParams();
    const url = `https://api.rawg.io/api/games/${slug}/screenshots?key=${apiKey}`;    

    const [gameScreenshots, setGameScreenshots] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setGameScreenshots(data.results));
    },[setGameScreenshots]);

    return (
        
        <div className="game-screenshots">
        {gameScreenshots.length <= 2 && <img className="extra-screenshot" src={background_image} alt="Screenshot"/>}
        {gameScreenshots.length >= 2 && gameScreenshots.slice(0, 3).map((game) => (
            <img className="screenshots-img" key={game.id} src={game.image} alt="Screenshot" />
        )
        )}          
        </div>
        
    )
}

export default GameScreenshots