import {React, useState} from "react";
import ControlledCarousel from "../../components/carousel/Controlled-Carousel";
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import "./home.css";
import { popularGames} from "../../constants";


function Home() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <ControlledCarousel/>
    <Divider/>
    <CardsList 
    title="Recomendados"
    gameList={gameList} 
    setGameList={setGameList}
    url={popularGames}
    />
    </>
    )
}

export default Home; 