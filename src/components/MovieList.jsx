import React, { Component } from "react";
import MovieItem from "./MovieItem";

class MovieList extends Component {
    render() {
        const {
            movies,
            addMovieToWillWatch,
            removeMovieFromWillWatch
        } = this.props;
    return (
        <div className="row">
            {
                movies.map(movie => {
                    return (
                            <div key={movie.id} className="col-md-4 mb-4">
                                <MovieItem
                                    item={movie}
                                    addMovieToWillWatch={addMovieToWillWatch}
                                    removeMovieFromWillWatch={removeMovieFromWillWatch}
                                />
                            </div>
                    )})
            }
        </div>
        )
    }
}
export default MovieList;
