import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/Header/Header";
import styles from './homepage.css';

export default class HomePageRouter extends Component {

  render() {

    return (
      <div className={styles.BodyContainer} >
        <Header className={styles.HeaderContainer}/>
      </div>
    );
  }

}


if (document.getElementById('root')) {
  ReactDOM.render(<HomePageRouter />, document.getElementById('root'));
}
