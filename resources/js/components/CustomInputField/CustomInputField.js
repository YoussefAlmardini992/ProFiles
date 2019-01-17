import  React,{Component} from 'react';


export default class CustomInputField extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const{
            type,
            name,
            label,
            value,
            onChange,
            customContainerStyle
        }= this.props;

        return(
            <div style={customContainerStyle}>
                <label>{label}</label>
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </div>
        )
    }

}
