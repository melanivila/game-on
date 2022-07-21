import {React, useState} from "react";
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchRacingGames} from "../../constants";

function Racing() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de carreras"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchRacingGames}
    />
    </>
    )
}

export default Racing; 