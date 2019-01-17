import React, {Component} from 'react';
import CustomInputField from "../../components/CustomInputField/CustomInputField";
import CustomButton from "../../components/CustomButton/CustomButton";


export default class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            number: null,
            password: null,
        }
    }

    render() {
        return (
            <div className="container">
                Contact Page
                   <CustomInputField
                       type={'email'}
                       label={'email'}
                       onChange={(event) => this.setState({email: event.target.value})}
                   />
                   <CustomInputField
                       type={"password"}
                       label={"Password"}
                       onChange={(event) => this.setState({password: event.target.value})}
                       customContainerStyle={{backgroundColor:'red'}}
                   />
                   <CustomInputField
                       type={'number'}
                       label={'Phone number:'}
                       onChange={(event) => this.setState({number: event.target.value})}
                   />

                   <CustomButton
                       label={'send'}
                       onClick={this.onSend}
                   />
            </div>
        );
    }
}
