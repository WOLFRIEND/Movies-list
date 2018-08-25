import React, { Component } from "react";

class MovieListWillWatch extends Component{
    render() {
        const { moviesWillWatch } = this.props;
        return (
            <div>
                <h4>Will Watch: {moviesWillWatch.length} movies</h4>
                <ul className="list-group">
                    {
                        moviesWillWatch.map(item => (
                        <li key={item.id} className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <div>{item.title}</div>
                                <div>{item.vote_average}</div>
                            </div>
                        </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default MovieListWillWatch;