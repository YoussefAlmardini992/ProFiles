import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Logo from "./components/logo/logo";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import MyProject from "./pages/MyProject/MyProject";
import ContactPage from "./pages/ContactPage/ContactPage";
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import styles from "../../public/css/index.css"


export default class Index extends Component {

    render() {
        return (
                <BrowserRouter>
                    <div>
                        <div className="NavBar " >
                            <div><Link to='/'> <Logo/></Link></div>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/myproject'>My Project</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </div>
                        <Switch>
                            <Route exact path='/'  component={HomePage}/>
                            <Route path='/myproject' component={MyProject}/>
                        </Switch>
                    </div>
                </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'))
}


