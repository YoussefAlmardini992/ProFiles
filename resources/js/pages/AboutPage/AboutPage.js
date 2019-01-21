import React, {Component} from 'react';
import PersonInfo from "../../components/PersonInfo/PersonInfo";
import styles from "./AboutPage.css"
const imageName = require('../../../../public/img/logo.jpeg');

export default class AboutPage extends Component {
  render() {
    return (
      <div className="AboutContainer" >

          <div className="AboutUsDescription">
              some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text
          </div>
          <div className="PersonsInfo">
                <PersonInfo
                  name="Name"

                  information="some text"
                />
                <PersonInfo
                  name="Name"

                  information=" some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text"
                />
          </div>
      </div>
    );
  }
}

