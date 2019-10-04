import React from 'react';
import axios from 'axios';

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', message: '', dateTime: `${dateTime}` };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault(); //untuk disubmit tidak pindah halaman

        /**socket io client */
        

        /**end */

        console.log("Submit Form");
        const payload = {
            name: this.state.name,
            message: this.state.message,
            dateTime: this.state.dateTime
        }
        console.log('payload >', payload);

        axios.post(`http://localhost:3001/api/dataChat/add`, {

            name: this.state.name,
            message: this.state.message,
            dateTime: this.state.dateTime
        })
            .then(res => {
                this.setState({
                    name: '',
                    message: ''
                });
                console.log(res);
                console.log(res.data);
            })





    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-goup">
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        className="form-control"
                        placeholder="your name"
                        onChange={this.handleChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <textarea
                        type="text"
                        name="message"
                        value={this.state.message}
                        className="form-control"
                        placeholder="write your chat here..."
                        onChange={this.handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}