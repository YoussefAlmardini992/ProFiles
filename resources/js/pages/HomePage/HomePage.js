import React, { Component } from 'react';


export default class HomePage extends Component {

    render() {
      return (
            <div className="container">
                <div style={styles.title}>
                    Home Page
                </div>

            </div>
        );
    }
}
const styles = {
    title:{
        color: 'red',
        fontWeight:'bold'
    }
};