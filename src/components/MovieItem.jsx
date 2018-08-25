import React, { Component } from "react";


class MovieItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            willWatch: false
        };
    }

    changeWillWatch = () => {
        const { addMovieToWillWatch, removeMovieFromWillWatch, item } = this.props;
        this.state.willWatch ? removeMovieFromWillWatch(item) : addMovieToWillWatch(item);

        this.setState({ willWatch: !this.state.willWatch })
    };

    render() {
        const { item } = this.props;
        return(
            <div className="card" style={{width: "16rem"}}>
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||item.poster_path}`} alt="Movie poster" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Rating: {item.vote_average}</p>
                    <button type="button" className={`btn ${this.state.willWatch ? "btn-success" : "btn-secondary"}`} onClick={this.changeWillWatch}>Will watch</button>
                </div>
            </div>
        )
    }
}
export default MovieItem;
