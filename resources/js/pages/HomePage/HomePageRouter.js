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
    }
  }
  navigatePage(target){

    switch (target){
      default : case 'home':
        return(<HomePage/>);
      case 'about':
        return(<AboutPage/>);
      case 'projects':
        return(<ProjectsPage/>);
      case 'my project':
        return(<MyProject/>);
      case 'contact':
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
