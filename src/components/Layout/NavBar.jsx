import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Boat list</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link className="nav-item nav-link active" to="/search">Search</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;
