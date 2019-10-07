import React from 'react';
import axios from 'axios';
import openSocket from 'socket.io-client';


var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;




export default class FormInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', message: '', dateTime: `${dateTime}`, chatID: `${Date.now()}` };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault(); //untuk disubmit tidak pindah halaman

        // this.state= {name: '', message: '', dateTime: `${dateTime}`, chatID: '', ckRandom: Math.random()}
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        


        console.log("Submit Form");
        const payload = {
            name: this.state.name,
            message: this.state.message,
            dateTime: this.state.dateTime,
            chatID: this.state.chatID
        }
        console.log('payload >', payload);

        // this socket connect
        const socket = openSocket('http://localhost:3002/');
        socket.emit('send-message', payload);
        // 

        axios.post(`http://localhost:3001/api/dataChat/add`, {

            name: this.state.name,
            message: this.state.message,
            dateTime: this.state.dateTime,
            chatID: this.state.chatID
        })
            .then(res => {
                this.setState({
                    name: '',
                    message: ''
                });
                console.log('post chek 1', res);
                console.log('post chek 2', res.data);
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