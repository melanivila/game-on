import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import CardsList from '../../components/cards/CardsList';
import { searchGames } from '../../constants/index';

function SearchGame () {
    const { name } = useParams();
    const url = searchGames + name;
    const [gameList, setGameList] = useState([]);

    return (
        <>
        <CardsList 
        title="Se encontraron ..."
        gameList={gameList} 
        setGameList={setGameList}
        url={url}
        />
        </>
    )
}

export default SearchGame;