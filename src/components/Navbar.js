import React from 'react';
import { NavLink, Link} from 'react-router-dom';

const Navbar = (props) => {
    //using link component from react router dom to create navbar
    // what Navlink allows us to do is to have when the user clicks it, it routes the user from the app.js based on the exact path coded

    let navClass = "collapse navbar-collapse"

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">React Auth</Link>
                    <button className="navbar-toggler" type="button" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={navClass}> 
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to='/'> Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar