import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import styles from './logo.css';

const imageName = require('../../../../public/img/bg.jpg');

export default class Logo extends Component{

    home(){
        return (
            <HomePage/>
        )
    };

    render(){
        return(
            <Router>
                <div className={styles.logoContainer} >
                    <Link  to="/">
                        <img className={styles.logo}  src={imageName} />
                    </Link>

                    <Route exact path="/"  />
                </div>
            </Router>
        )
    }

}

