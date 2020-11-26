import React, { useState, useEffect } from 'react';
import Header from './game/header/header';
import Game from './game/game';
import './style.css'
// import PropTypes from 'prop-types';

// FeatureGame.propTypes = {

// };

function FeatureGame(props) {
    const initListApp = [
        { id: 0, value: null }, { id: 1, value: null }, { id: 2, value: null }, { id: 3, value: null },
        { id: 4, value: null }, { id: 5, value: null }, { id: 6, value: null }, { id: 7, value: null },
        { id: 8, value: null }, { id: 9, value: null }, { id: 10, value: null }, { id: 11, value: null },
        { id: 12, value: null }, { id: 13, value: null }, { id: 14, value: null }, { id: 15, value: null },
    ]

    const randomList = [2, 4, 8];

    function randomNumber() {
        let newList = [...listApp]
        let listEmpty = [...listApp].filter(item => item.value === null);
        if (listEmpty.length === 0) return false;
        let numberOfRandom = (Math.random() <= 0.8) ? 1 : 2;
        for (let i = 0; i < numberOfRandom; i++) {
            let randomNum = (Math.random() <= 0.8) ? 1 : (Math.random() > 0.8 && Math.random() <= 0.98) ? 2 : 3;
            listEmpty[Math.round(Math.random() * (listEmpty.length - 1))].value = randomList[randomNum - 1];
        }

        newList = newList.map(item => {
            let item2 = listEmpty.find(i2 => i2.id === item.id);
            return item2 ? { ...item, ...item2 } : item;
        });
        //listEmpty.forEach(item => console.log(item.id + ":" + item.value))
        setListApp(newList);
    }

    let horizontal = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
    let horizontal1 = [[3, 2, 1, 0], [7, 6, 5, 4], [11, 10, 9, 8], [15, 14, 13, 12]];
    let vertical = [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15]];
    let vertical1 = [[12, 8, 4, 0], [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3]];

    function setLeftRight_DownUp(newList, list) {
        list.forEach(item => {
            for (let i = 0; i < item.length - 1; i++) {
                if (newList[item[i]].value !== null) {
                    for (let j = i + 1; j < item.length; j++) {
                        if (newList[item[j]].value !== null) {
                            if (newList[item[i]].value !== newList[item[j]].value) {
                                break;
                            }
                            else {
                                newList[item[i]].value *= 2;
                                newList[item[j]].value = null;
                                break;
                            }
                        }
                        else {
                            continue;
                        }
                    }
                }
                else {
                    continue;
                }
            }
        })

        list.forEach(item => {
            for (let i = 0; i < item.length; i++) {
                var temp = null;
                for (let x = i + 1; x < item.length; x++) {
                    if (newList[item[x]].value !== null) {
                        temp = 1;
                        break;
                    }
                }
                while (newList[item[i]].value === null) {
                    if (temp === null) {
                        break;
                    }
                    if (newList[item[i]].value === null) {
                        for (let j = i; j < item.length - 1; j++) {
                            newList[item[j]].value = newList[item[j + 1]].value;
                        }
                        newList[item[item.length - 1]].value = null;
                    }
                }
            }
        })
    }



    function changeValue(keycode) {
        let newList = [...listApp];

        if (keycode === 37) {
            setLeftRight_DownUp(newList, horizontal);
        }
        if (keycode === 38) {
            setLeftRight_DownUp(newList, vertical);
        }
        if (keycode === 39) {
            setLeftRight_DownUp(newList, horizontal1);
        }
        if (keycode === 40) {
            setLeftRight_DownUp(newList, vertical1)
        }
        let a = newList.filter(item => item.value !== null).map(item => item.value).reduce((sum, num) => {
            return sum + num;
        }, 0)


        if (a > BestScore) {
            setBestScore(a);
        }
        setTotal(a);
        setListApp(newList);
    }

    function checkFull(list, newList) {
        var t = false;
        list.forEach(item => {
            for (let i = 0; i < item.length - 1; i++) {
                if (newList[item[i]].value === newList[item[i + 1]].value || newList[item[i]].value === null) {
                    t = true;
                }
            }
        })
        return t;
    }

    function handleKeyDown(e) {
        if (e.keyCode === 37) {
            changeValue(37);
        }
        if (e.keyCode === 38) {
            changeValue(38);
        }
        if (e.keyCode === 39) {
            changeValue(39);
        }
        if (e.keyCode === 40) {
            changeValue(40);
        }
        if (checkFull(horizontal, listApp) || checkFull(vertical, listApp)) {

        }
        else {
            document.getElementById("replay-btn").classList.remove("hidden");
        }
        randomNumber();
    }

    function handleNewGameBtn() {
        setListApp(initListApp);
        setTotal(0);
        document.getElementById("replay-btn").classList.add("hidden");
    }

    useEffect(() => {
        window.addEventListener("keyup", handleKeyDown, false);
        return () => {
            window.removeEventListener("keyup", handleKeyDown)
        };
    });



    const [BestScore, setBestScore] = useState(0);
    const [Total, setTotal] = useState(0);
    const [listApp, setListApp] = useState(initListApp);

    return (
        <div className="main">
            <div id="replay-btn" className="bg-text hidden">
                <div>GAME OVER</div>
                <button className="btn-new_game" onClick={handleNewGameBtn}>PLAY AGAIN</button>
            </div>
            <div className="game-container">
                <Header Total={Total} BestScore={BestScore} />
                <button className="btn-new_game" onClick={handleNewGameBtn} >New Game</button>
                <Game listApp={listApp} />
            </div>
        </div>
    );
}

export default FeatureGame;


