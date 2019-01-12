import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";

export default class NavBar extends Component{

   home(){
    return (
     <HomePage/>
    )
  };
  projects(){
    return(
      <ProjectsPage/>
    )
  };
  about(){
    return(
     <AboutPage/>
    )
  }
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={this.home} />
          <Route path="/about" component={this.about} />
          <Route path="/projects" component={this.projects} />
        </div>
      </Router>
    )
  }

}