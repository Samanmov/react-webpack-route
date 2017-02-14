import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import styles from './serial-detail.css';
//require('./serial-detail.css');





class SerialDetail extends Component {
	handleRedirect(){
        browserHistory.push('/series');
    }
    render(){
        // serial array
        const series = this.props.route.data;
        // serial Id from param
        const id = this.props.params.id;
        // Filter serial with ID
        const serial = series.filter(serial => {
            if(serial.id == id) {
                return serial;
            }
        });

        return (
        	// button to details page that redirects to list page on click:
        	<div className="container container-detail">         
                <div className="row row-detail">
                    <div className="col-sm-6 col-md-12 col-img">
                        <div className="thumbnail">
                            <img src={serial[0].media} alt={serial[0].name} />
                             <h1 className="title">{serial[0].name}</h1>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <p>{serial[0].summary}</p>
                        <dl className="dl-horizontal pull-left">
                            <dt>Genre:</dt>
                            <dd>{serial[0].genre}</dd>
                            <dt>Country</dt>
                            <dd>{serial[0].country}</dd>
                            <dt>Year</dt>
                            <dd>{serial[0].year}</dd>
                            <dt>Ratings</dt>
                            <dd>{serial[0].rating}</dd>
                        </dl>
                    </div>   
                    <div className="col-sm-6 col-md-6">
                         <iframe 
                                className="video"
                                src={`https://www.youtube.com/embed/${serial[0].trailer}`}
                                frameBorder="0"
                                allowFullScreen>
                        </iframe>
        
                    </div>
                 </div>    
                <div className="row">
                    <div className="col-sm-6 col-md-12 col-button">
                        <button className="btn btn-default btn-blue" onClick={this.handleRedirect.bind(this)}>Tillbaka serier</button>
                   </div>
                </div>
            </div>
        );
    }
}

export default SerialDetail
