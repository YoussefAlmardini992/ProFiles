import React, { Component } from 'react';
import styles from './PersonInfo.css';
export default class PersonInfo extends Component {

        render() {
          const{image,name,information} = this.props;
            return (
                <div className="PersonInfo">
                    <img src={image}/>
                    <h2> {name}</h2>
                    <p>{information}</p>
                </div>
            )
        }




}



