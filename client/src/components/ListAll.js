import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import Popup from './Popup';

const ListAll = (props) => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [player_id, setPlayer_id] = useState("");

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/api/player/${playerId}`)
            .then((res) => {
                setAllPlayers(allPlayers.filter((player) => player._id !== playerId))
                window.location.reload();
                // navigate('/players/list');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect( () => {
        axios.get("http://localhost:8000/api/player")
            .then( (res) => {
                setAllPlayers(res.data);
            })
            .catch( (err) => {
                console.log(err);
            })
    }, [])



    return (
        <div className="list">
            <h2 style={{ display: "inline-block" }}><Link to="/players/list">List</Link></h2> <span> | </span><h2 style={{ display: "inline-block" }}><Link to="/players/new">Add Player</Link></h2>

            {/* <button onClick={() => navigate("/players/list")}>List All Players</button>
                <button onClick={() => navigate("/players/new")}>Add Player</button> */}
            {/* <button onClick={() => navigate("/player/:_id")}>Edit A Player</button>
                <button onClick={() => navigate("/player/:_id")}>View a Player</button> */}
            <table>
                <thead>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        allPlayers.map( (player, index) => (
                            <tr key={index}>
                                <td>
                                    { player.playerName}
                                </td>
                                <td>{ player.preferredPosition }</td>
                                <td>
                                    <button onClick={ () => {
                                        // togglePopup;
                                        setPlayerName(player.playerName);
                                        setPlayer_id(player._id)
                                        setIsOpen(!isOpen);
                                        }} 
                                        className="deleteBtn">DELETE</button>

                                </td>
                                
                                {isOpen ?  
                                <Popup
                                    content={
                                        <>
                                            <p>Are you sure you want to remove {playerName}?</p>
                                            <button onClick={(e) => {deletePlayer(player_id)}}>Yes</button>
                                        </>
                                    }
                                    handleClose={togglePopup}
                                />
                                : null
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default ListAll;