import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/Header/Header";
import styles from './homepage.css';
import HomePage from "./HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import MyProject from "../MyProject/MyProject";
import ContactPage from "../ContactPage/ContactPage";

export default class HomePageRouter extends Component {

  constructor(props){

    super(props);
    this.state = {
      currentPage: null
    };
    this.navigatePage = this.navigatePage.bind(this);
  }

  navigatePage(target){
    switch (target){
      default : case 'Home':
        window.history.replaceState(null, null,"/");
        return(<HomePage/>);
      case 'About':
        window.history.replaceState(null, null, "/about");
        return(<AboutPage/>);
      case 'Projects':
        window.history.replaceState(null, null, "/projects");
        return(<ProjectsPage/>);
      case 'My Project':
        window.history.replaceState(null, null, "/my project");
        return(<MyProject/>);
      case 'Contact':
        window.history.replaceState(null, null, "/contact");
        return(<ContactPage/>);
    }
  }

  render() {
    return (
      <div className={styles.BodyContainer} >
        <Header
          className={styles.HeaderContainer}
          onClick={(event)=> this.setState({currentPage:event.target.innerHTML})}
        />
        <div>
          {this.props.childeren}
          {this.navigatePage(this.state.currentPage)}
        </div>
      </div>
    );
  }

}


if (document.getElementById('root')) {
  ReactDOM.render(<HomePageRouter />, document.getElementById('root'));
}
