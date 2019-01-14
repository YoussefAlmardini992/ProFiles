import React,{Component} from 'react';
import styles from './NavBarItemStyles.css';

export default class NavBarItem extends Component{

  render(){
    const{label,onClick} = this.props;
    return(
      <div onClick={onClick} className={styles.container}>
        <h5>{label}</h5>
      </div>
    )
  }
}

