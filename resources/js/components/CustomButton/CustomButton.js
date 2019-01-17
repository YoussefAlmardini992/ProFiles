import React,{Component} from 'react';

export default class CustomButton extends Component{


    render(){
        const {label,onClick,type} = this.props;
        return(
            <div>
                <button
                    type={type}
                    onClick={onClick}
                >
                    {label}
                </button>
            </div>
        )
    }

}