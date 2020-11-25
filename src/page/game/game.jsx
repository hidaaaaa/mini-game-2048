import React from 'react';
import PropTypes from 'prop-types';
import GameItem from './game-item/game-item'

Game.propTypes = {

};

function Game(listApp) {
    return (
        <div class="table">
            <table>
                <tbody>
                    <GameItem listApp={listApp} />
                </tbody>
            </table>
        </div>
    );
}

export default Game;