import React, {useEffect, useState} from "react";
import './game-data.css';
import { apiKey } from "../../constants/index";

function GameStores({slug}) {
    const [gameStores, setGameStores] = useState([]);
    const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setGameStores(data.stores));
    },[setGameStores]);

    return (
        <div className="game-stores">
        {gameStores.length !== 0 && <h4>Compralo en:</h4>}
        {gameStores && gameStores.map((game) => {
            return (
                <a key={game.store.id} href={`https://${game.store.domain}`} target="_blank" rel="noreferrer"> 
                    {game.store.id === 1 ? <img src="steam-logo.png" alt="Steam store"/>
                    : game.store.id === 2 ? <img src="epic-games-logo.png" alt="Epic games store"/>
                    : game.store.id === 3 ? <img src="playstation-store-logo.png" alt="Playstation store"/>
                    : game.store.id === 11 ? <img src="xbox-store-logo.png" alt="Xbox store"/>
                    : <button className="website-button">{game.store.name}</button>}
                </a>
            )}
        )}
        </div>
    )
}

export default GameStores