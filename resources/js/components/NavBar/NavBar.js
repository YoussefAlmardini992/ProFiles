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
          label={'home'}
          onClick={onClick}
        />
        <NavBarItem
          label={'about'}
          onClick={onClick}
        />
        <NavBarItem
          label={'projects'}
          onClick={onClick}
        />
        <NavBarItem
          label={'my project'}
          onClick={onClick}
        />
        <NavBarItem
          label={'contact'}
          onClick={onClick}
        />
      </div>
    )
  }

}

