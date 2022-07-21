import {React, useState} from "react";
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchStrategyGames} from "../../constants";

function Strategy() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de estrategia"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchStrategyGames}
    />
    </>
    )
}

export default Strategy; 