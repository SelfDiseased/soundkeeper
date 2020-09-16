import React from 'react';
import './styles.scss';
import Player from './Player/Player';
import Tracks from './Tracks/Tracks';

const Main = () => {
    return(
        <main className="main_container">
            <Tracks />
            <Player />
        </main>
    )
}
export default Main;