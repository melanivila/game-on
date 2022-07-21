import {React, useState} from "react";
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchXboxGames } from "../../constants";

function XBOX() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de XBOX"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchXboxGames}
    />
    </>
    )
}

export default XBOX; 