import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Status1 = (props) => {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/player")
            .then((res) => {
                setAllPlayers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="list">
            <h1>Player Status - Game 2</h1>
            <h3 style={{ display: "inline-block" }}><Link to="/status/game1">Game 1</Link></h3>
            <span> | </span>
            <h3 style={{ display: "inline-block" }}><Link to="/status/game2">Game 2</Link></h3>
            <span> | </span>
            <h3 style={{ display: "inline-block" }}><Link to="/status/game3">Game 3</Link></h3>


            <table>
                <thead>
                    <th>Team Name</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        allPlayers.map((player, index) => (
                            <tr key={index}>
                                <td>{player.playerName}</td>
                                <td>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.target.style.backgroundColor = 'green';
                                            document.getElementById(`${index}R`).style.backgroundColor = "white";
                                            document.getElementById(`${index}Y`).style.backgroundColor = "white";
                                        }}
                                        className="plainBtn greenBtn"
                                        id={`${index}G`}
                                    >
                                        Playing</button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.target.style.backgroundColor = 'red';
                                            document.getElementById(`${index}G`).style.backgroundColor = "white";
                                            document.getElementById(`${index}Y`).style.backgroundColor = "white";
                                        }}
                                        className="plainBtn redBtn"
                                        id={`${index}R`}
                                    >
                                        Not Playing</button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.target.style.backgroundColor = 'yellow';
                                            document.getElementById(`${index}G`).style.backgroundColor = "white";
                                            document.getElementById(`${index}R`).style.backgroundColor = "white";
                                        }}
                                        className="yellowBtn"
                                        id={`${index}Y`}
                                    >
                                        Undecided</button>
                                </td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>
        </div>
    )
};

export default Status1;