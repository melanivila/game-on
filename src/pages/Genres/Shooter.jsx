import {React, useState} from "react";
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchShooterGames} from "../../constants";

function Shooter() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos shooter"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchShooterGames}
    />
    </>
    )
}

export default Shooter; 