import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../serial/serial-detail.css';


class Movie extends Component {
    render(){
        // Get data from route props
        const movies = this.props.route.post;
        // Map through movies and return linked movies
        const MovieNode = movies.map((movie) => {
            return (
                    <div className="col-md-3 col-movies"  key={movie.id}>
                        <img src={movie.poster} className="poster"  />
                        <Link
                        to={"/movies/"+movie.id}
                        className="poster-link pull-left"
                        >
                        {movie.name}
                            
                        </Link>
                    </div>
                 
            )
        });
        return (
            <div className="row">
                {MovieNode}  
            </div>
        );
    }
}

export default Movie