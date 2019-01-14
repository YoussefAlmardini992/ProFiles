import React,{Component} from 'react';
import NavBar from "../NavBar/NavBar";
import Logo from "../logo/logo";
import styles from './header.css';

export default class Header extends Component{

  render(){

    return(

          <div className={styles.HeaderContainer}>
            <Logo/>
            <NavBar/>
          </div>

    )
  }
}
