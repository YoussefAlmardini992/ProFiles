import React, {Component} from 'react';
import PersonInfo from "../../components/PersonInfo/PersonInfo";

const imageName = require('../../../../public/img/logo.jpeg');

export default class AboutPage extends Component {
  render() {
    return (
      <div className="AboutContainer">
        <PersonInfo
          name="Rawand"
          image={imageName}
          information="some text"
        />
        <PersonInfo
          name="Yousef"
          image={imageName}
          information=" some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text"
        />

      </div>
    );
  }
}

