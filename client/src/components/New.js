import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const New = (props) => {
    // const [licensed, setLicensed] = useState(true);
    // const [title, setTitle] = useState("");
    // const [artist, setArtist] = useState("");
    // const [albumArtUrl, setAlbumUrl] = useState("");
    // const [videoUrl, setVideoUrl] = useState("");
    // const [genre, setGenre] = useState("Rap");
    // const [year, setYear] = useState("");

    const [playerName, setPlayerName] = useState("");
    const [preferredPosition, setPreferredPosition] = useState("");
    const [errs, setErrs] = useState({});
    const isEnabled = playerName.length > 2 && preferredPosition.length > 2;

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/player', {
            playerName,
            preferredPosition,
        })
            .then((res) => {
                if (res.data.errors){
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/players/list");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <div className="list">
                <h2 style={{ display: "inline-block" }}><Link to="/players/list">List</Link></h2> <span> | </span><h2 style={{ display: "inline-block" }}><Link to="/players/new">Add Player</Link></h2>

                {/* <button onClick={() => navigate("/players/list")}>List All Players</button>
                <button onClick={() => navigate("/players/new")}>Add Player</button> */}
                {/* <button onClick={() => navigate("/player/:_id")}>Edit A Player</button>
                <button onClick={() => navigate("/player/:_id")}>View a Player</button> */}
                <div className="list">
                <h1 style={{textAlign: "left"}}>Add Player</h1>
                <form  onSubmit={submitHandler}>
                    <div>
                        <label>Player Name: </label>
                        <input type="text" 
                            name="playerName"
                            value={playerName}
                            onChange = {(e) => setPlayerName(e.target.value) }
                        />
                        {
                            playerName.length < 2 ?
                                <p className="error-text">*Name must be at least 2 characters in length</p> : 
                                null
                        }
                        {
                            errs.playerName ?
                                    <p className="error-text">{errs.playerName.message}</p> :
                                null
                        }
                    </div>
                    <div>
                        <label>Preferred Position: </label>
                        <input type="text" 
                            name="preferredPosition"
                            value={preferredPosition}
                            onChange = {(e) => setPreferredPosition(e.target.value)}
                        />
                        {
                                preferredPosition.length < 2 ?
                                <p className="error-text">*Your preferred position must be at least 2 characters in length</p> :
                                null
                        }
                        {
                            errs.preferredPosition ?
                                    <p className="error-text">{errs.preferredPosition.message}</p> :
                                null
                        }
                    </div>
                    <br />
                        <button disabled={ !isEnabled }  class="addBtn" type="submit"> ADD </button> 
                    <br />
                    <br />
                    {/* <div>
                        <input type="checkbox"
                            name="licensed"
                            checked={licensed}
                            onChange = {() => setLicensed(!licensed) }
                        />
                        <label>Is Licensed?</label>
                    </div>
                    <div>
                        <label>Title: </label>
                        <input type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {
                            errs.title ? 
                            <span>{errs.title.message}</span> : 
                            null
                        }
                    </div>
                    <div>
                        <label>Artist: </label>
                        <input type="text"
                            name="artist"
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)}
                        />
                        {
                            errs.artist ?
                                <span>{errs.artist.message}</span> :
                                null
                        }
                    </div>
                    <div>
                        <label>Album Art URL: </label>
                        <input type="text"
                            name="albumArtUrl"
                            value={albumArtUrl}
                            onChange={(e) => setAlbumArtUrl(e.target.value)}
                        />
                        {
                            errs.albumArtUrl ?
                                <span>{errs.albumArtUrl.message}</span> :
                                null
                        }
                    </div>
                    <div>
                        <label>Video URL: </label>
                        <input type="text"
                            name="videoUrl"
                            value={videoUrl}
                            onChange={(e) => setVideoURL(e.target.value)}
                        />
                        {
                            errs.videoUrl ?
                                <span>{errs.videoUrl.message}</span> :
                                null
                        }
                    </div>
                    <div>
                        <label>Genre: </label>
                        <select
                            name="genre"
                            value={genre}
                            onChange={(e) => SVGPathSegLinetoHorizontalRel(e.target.value)}
                            >
                            <option value="Pop">Pop</option>
                            <option value="Country">Country</option>
                            <option value="Hip Hop">Hip Hop</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Rap">Rap</option>
                            <option value="Classical">Classical</option>
                            <option value="Techno">Techno</option>
                            <option value="Gospel">Gospel</option>
                            <option value="Rock">Rock</option>
                        </select>
                    </div>
                    <div>
                        <label>Year: </label>
                        <input type="number"
                            name="year"
                            min="1930"
                            checked={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        {
                            errs.year ?
                                <span>{errs.year.message}</span> :
                                null
                        }
                    </div> */}
                    <br />

                </form>
                </div>
            </div>
        </div>
    )
};

export default New;