import React, { Component } from 'react';
import styles from './PersonInfo.css';
export default class PersonInfo extends Component {

        render() {
            return (
                <div className="PersonInfo">
                    <img src={this.props.PersonImg}/>
                    <h2> {this.props.PersonName}</h2>
                    <p>{this.props.PersonText}</p>
                </div>
            )
        }




}



