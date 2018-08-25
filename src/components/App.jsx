import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: moviesData,
            moviesWillWatch: [],
        }
    }
    addMovieToWillWatch = (item) => {

        let arr = this.state.moviesWillWatch;
        arr.push(item);
        this.setState({ moviesWillWatch: arr});
    };

    removeMovieFromWillWatch = (movie) => {
        let oldState = this.state.moviesWillWatch;
        let newState = oldState.filter(item => item.id !== movie.id);
        this.setState({moviesWillWatch: newState});
    };


    render() {
    const {movies, moviesWillWatch} = this.state;
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-9">
                        <MovieList
                            movies={movies}
                            addMovieToWillWatch={this.addMovieToWillWatch}
                            removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                        />
                </div>
                <div className="col-3">
                    <MovieListWillWatch moviesWillWatch={moviesWillWatch} />
                </div>
            </div>
        </div>
    )
  }
}
export default App;
