import React, { Component } from 'react';
import styles from "./homepage.css"
import AboutPage from "../AboutPage/AboutPage";


export default class HomePage extends Component {

    render() {
      return (
          <div className="OnePageDesign">
            <div className="homePageContainer">
                <div className="BgImg"></div>
                <div className="HomePageContent">
                    <div className="title">
                        ATitle
                    </div>
                    <div >
                        some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text
                    </div>
                    <button className="HomePageBtn">Create your owen project</button>
                </div>

            </div>

          </div>
        );
    }
}
