import React, {Component} from 'react';
import PersonInfo from "../../components/PersonInfo/PersonInfo";
import styles from "./AboutPage.css"
const imageName = require('../../../../public/img/logo.jpeg');

export default class AboutPage extends Component {
  render() {
    return (
      <div className="AboutContainer">
        <PersonInfo
          name="Name"
          image={imageName}
          information="some text"
        />
        <PersonInfo
          name="Name"
          image={imageName}
          information=" some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text"
        />

      </div>
    );
  }
}

