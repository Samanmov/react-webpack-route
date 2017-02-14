// ./src/serial/serial.component.jsx
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './serial.component.css';

class Serial extends Component {
    render(){
        // Get data from route props
        const series = this.props.route.data;
        // Map through series and return linked series
        const SerialNode = series.map((serial) => {
            return (
                    <div className="col-md-3 col-series"  key={serial.id}>
                        <img src={serial.poster} className="poster"  />
                        <Link
                        to={"/series/"+serial.id}
                        className="poster-link pull-left"
                        >
                        {serial.name}
                            
                        </Link>
                    </div>
                 
            )
        });
        return (
            <div className="row">
                {SerialNode}  
            </div>
        );
    }
}

export default Serial