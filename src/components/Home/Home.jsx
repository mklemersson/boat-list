import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="jumbotron text-center col-md-8">
                    <h2 className="mb-4">Welcome to Boat List</h2>

                    <p className="mb-4">See our list of available boats for renting.</p>

                    <Link to="/search" className="btn btn-success">See our boats</Link>
                </div>
            </div>
        );
    }
}

export default Home;
