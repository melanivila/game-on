import React from 'react';
import GameData from '../../components/game-data/GameData';

function Game ({slug}) {
    return (
        <>
        <GameData slug={slug}/>
        </>
    )
}

export default Game;