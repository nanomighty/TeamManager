import React from 'react';
import { Link, navigate } from '@reach/router';

const Header = (props) => {
    return (
        <div>
            <h2 style={{ display: "inline-block" }}><Link to="/players/list">Manage Players</Link></h2> 
            <span> | </span>
            <h2 style={{ display: "inline-block" }}><Link to="/status/game1"> Manage Player Status</Link></h2>

        </div>
    )
};

export default Header;