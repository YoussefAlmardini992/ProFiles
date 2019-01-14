import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import styles from "./NavBar.css"
import ContactPage from "../../pages/ContactPage/ContactPage";
import MyProject from "../../pages/MyProject/MyProject";

export default class NavBar extends Component{


  render(){
    return(
        <Router>
            <div className={styles.NavContainer} >

              <ul  className={styles.NavBar}  >
                <li className={styles.NavItem} >
                  <Link className={styles.NavLink} to="/">Home</Link>
                </li>
                <li className={styles.NavItem} >
                  <Link className={styles.NavLink} to="/about">About</Link>
                </li>
                <li className={styles.NavItem} >
                  <Link className={styles.NavLink} to="/projects">Projects</Link>
                </li>
                  <li className={styles.NavItem} >
                      <Link className={styles.NavLink} to="/contact">Contact</Link>
                  </li>
                  <li className={styles.NavItem} >
                      <Link className={styles.NavLink} to="/myproject">My Project</Link>
                  </li>
              </ul>

                <Route exact path="/"  component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/myproject" component={MyProject}  />

            </div>
        </Router>
    )
  }

}

