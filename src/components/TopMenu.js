import React from 'react';
import { NavLink } from "react-router-dom";
import './TopMenu.css';


function TopMenu({isAuthenticated, toggleIsAuthenticated}) {

    function handleClick() {
        toggleIsAuthenticated(!isAuthenticated)
    }

    return (
        <nav className="TopMenu">
                <h4>Personal Blog</h4>
                <ul>
                    <li>
                        <NavLink exact to="/"  activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/blogposts" activeClassName="active-link">
                            {isAuthenticated === true ? "Blog overzicht" : ""}
                        </NavLink>
                    </li>
                    <li>
                        {isAuthenticated === true ? <button type="button" onClick={handleClick}>Uitloggen
                        </button> : <NavLink to="/login" activeClassName="active-link">Login</NavLink> }
                    </li>
                </ul>
        </nav>
    );
}

export default TopMenu;