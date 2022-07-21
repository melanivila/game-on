import React, {useEffect, useState} from "react";
import './game-data.css';

function GameGenres({url}) {
    const [gameGenres, setGameGenres] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setGameGenres(data.genres));
    },[setGameGenres]);

    return (
        <div className="gameGenres">      
        {gameGenres.length > 0 ? 
            gameGenres.map((game) => <span key={game.id} className="genre-tag">{game.name}</span>)
            : <span className="genre-tag">No disponible</span>
        }
        </div>
    )
}

export default GameGenres