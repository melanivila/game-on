import React, {useEffect, useState} from "react";
import './game-data.css';
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { apiKey } from "../../constants/index";

function GameConsoles({slug}) {
    const [gameConsoles, setGameConsoles] = useState([]);
    const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setGameConsoles(data.parent_platforms));
    },[setGameConsoles]);

    return (
        <div className="game-consoles">
            {gameConsoles && gameConsoles.filter(game => game.platform.id === 1 || game.platform.id === 2 || game.platform.id === 3 || game.platform.id === 7).map((game) => {
                return (
                    <span key={game.platform.id}>                        
                        {game.platform.id === 1 ? <FaWindows/>                             
                        : game.platform.id === 2 ? <FaPlaystation/> 
                        : game.platform.id === 3 ? <FaXbox/> 
                        : game.platform.id === 7 ? <SiNintendoswitch/> 
                        : null}
                    </span>
                )}
            )}
        </div>
    )
}

export default GameConsoles