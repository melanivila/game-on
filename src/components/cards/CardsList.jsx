import React, {useEffect, useState} from "react";
import GameCard from "./GameCard";
import "./gamecard.styles.css";
import Divider from "../divider/Divider";
import LoadingGif from "../loading/LoadingGif";

const CardsList = ({title, url, gameList, setGameList}) => {    
    const [loading, setLoading] = useState(true);
    const fetchList = async () => {
        const response = await fetch(url);
            const data = await response.json();
            setGameList(data.results);
            setLoading(false);
        };        
        useEffect(() => {
            fetchList();
        }, []);

        if (loading) {
            return <LoadingGif/>
        }

    return (
        <>
            <h2 className="title">{title}</h2>
            <Divider/>
            {gameList.length === 0 ? <p className="no-results">La búsqueda no obtuvo resultados. Intenta nuevamente</p> : 
            <>
               <div className="container-gamecards">
                   {gameList.map((game) => (
                       <GameCard 
                           slug={game.slug}
                           key={game.id} 
                           name={game.name}
                           released={game.released}
                           background_image={game.background_image}
                           rating={game.rating}
                           description={game.description}
                       />
                   )
                   )}
               </div>
           </>
            }
        </>
    )
}

export default CardsList