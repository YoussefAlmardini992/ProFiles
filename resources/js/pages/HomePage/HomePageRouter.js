import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/Header/Header";

export default class HomePageRouter extends Component {

  render() {

    return (
      <div className="container">
        <Header/>
      </div>
    );
  }
}


if (document.getElementById('root')) {
  ReactDOM.render(<HomePageRouter />, document.getElementById('root'));
}
