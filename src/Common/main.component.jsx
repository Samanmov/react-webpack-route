// ./src/common/common.component.jsx
import React, {Component} from 'react';
import { Link } from 'react-router';
import styles from './main.component.css';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default nav-style">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">HBO</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/Movies" activeClassName="active">Filmer</Link></li>
                                <li><Link to="/series" activeClassName="active">Serier</Link></li>
                                <li><Link to="/about" activeClassName="active">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main