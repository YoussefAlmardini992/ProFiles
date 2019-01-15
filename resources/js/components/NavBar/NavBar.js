import React,{Component} from 'react';
import NavBarItem from "./NavBarItem/NavBarItem";
import styles from './NavBarStyles.css';

export default class NavBar extends Component{



  render(){

    const{onClick} = this.props;

    return(
      <div className={styles.container}>
        <div className={styles.spaceBetween}>

        </div>
        <NavBarItem
          label={'Home'}
          onClick={onClick}
        />
        <NavBarItem
          label={'About'}
          onClick={onClick}
        />
        <NavBarItem
          label={'Projects'}
          onClick={onClick}
        />
        <NavBarItem
          label={'My Project'}
          onClick={onClick}
        />
        <NavBarItem
          label={'Contact'}
          onClick={onClick}
        />
      </div>
    )
  }

}

