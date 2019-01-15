import React, { Component } from 'react';
import PersonInfo from "../../components/PersonInfo/PersonInfo";
import styles from './AboutPage.css';
const imageName = require('../../../../public/img/logo.jpeg');

export default class AboutPage extends Component {
  render() {
    return (
      <div className="AboutContainer">
          <PersonInfo
              PersonName="Rawand"
              PersonImg={imageName}
              PersonText="some text"
          />
          <PersonInfo
              PersonName="Yousef"
              PersonImg={imageName}
              PersonText=" some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text"
          />

      </div>
    );
  }
}

