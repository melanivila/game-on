import {React, useState} from "react";
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchActionGames} from "../../constants";

function Action() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de acción"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchActionGames}
    />
    </>
    )
}

export default Action; 