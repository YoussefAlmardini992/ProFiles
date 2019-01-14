import React, {Component} from 'react';
import styles from './logo.css';

const imageName = require('../../../../public/img/bg.jpg');

export default class Logo extends Component {


  render() {
    return (

      <div className={styles.logoContainer}>
        <img className={styles.logo} src={imageName}/>
      </div>

    )
  }

}

