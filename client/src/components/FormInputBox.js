import React from 'react';
import FormInput from './FormInput';
import ListItem from './ListItem';



export default class FormInputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        
    }

   


    render() {
        return (

            <div>
                <div className="card-header  text-center bg-dark text-white">
                    <h1> REACT CHAT </h1>
                </div>
                <div class="card-body">
                <ListItem data={this.state.data} />
                <br />
                <FormInput inputSave={this.inputSave} />
                </div>
            </div>
           
        );
    }
}