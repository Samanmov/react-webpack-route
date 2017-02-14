import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import styles from '../serial/serial-detail.css';
//require('./serial-detail.css');





class MovieDetail extends Component {
    handleRedirect(){
        browserHistory.push('/movies');
    }
    render(){
        // movie array
        const series = this.props.route.post;
        // movie Id from param
        const id = this.props.params.id;
        // Filter movie with ID
        const movie = series.filter(movie => {
            if(movie.id == id) {
                return movie;
            }
        });

        return (
            // button to details page that redirects to list page on click:
            <div className="container container-detail">         
                <div className="row row-detail">
                    <div className="col-sm-6 col-md-12">
                        <div className="thumbnail">
                            <img src={movie[0].media} alt={movie[0].name} />
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-md-offset-1">
                        <h1 className="title-movie">{movie[0].name}</h1>
                        <p>{movie[0].summary}</p>
                        <dl className="dl-horizontal pull-left">
                            <dt>Genre:</dt>
                            <dd>{movie[0].genre}</dd>
                            <dt>Land</dt>
                            <dd>{movie[0].country}</dd>
                            <dt>År</dt>
                            <dd>{movie[0].Year}</dd>
                            <dt>Betyg</dt>
                            <dd>{movie[0].rating}</dd>
                            <dt>REGISSÖR</dt>
                            <dd>{movie[0].director}</dd>
                        </dl>
                    </div>   
                    <div className="col-sm-6 col-md-5 col-md-offset-0">
                         <iframe 
                                className="video"
                                src={`https://www.youtube.com/embed/${movie[0].trailer}`}
                                frameBorder="0"
                                allowFullScreen>
                        </iframe>
        
                    </div>
                 </div>    
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-button col-md-offset-1">
                        <button className="btn btn-default btn-blue" onClick={this.handleRedirect.bind(this)}>Tillbaka filmer</button>
                   </div>
                </div>
            </div>
        );
    }
}

export default MovieDetail
