import React from 'react';
import axios from 'axios';
import ItemChat from './ItemChat';
import openSocket from 'socket.io-client';




export default class ListItem extends React.Component {
    state = {
        _id: '',
        name: '',
        message: '',
        date: '',
        chatID:'',
        chat: []

    }

    

    componentDidMount() {

        const socket = openSocket('http://localhost:3002/');

        socket.on('receive-dm', () => {

            console.log('socket receive dm');

            axios.get(`http://localhost:3001/api/dataChat`)
                .then(res => {

                    this.setState({ chat: [...res.data] });
                    console.log('dataState > ', res.data);



                })
                .catch(err => console.log(err));
                


        })

        axios.get(`http://localhost:3001/api/dataChat`)
            .then(res => {

                this.setState({ chat: [...res.data] });
                console.log('dataState > ', res.data);



            })
            .catch(err => console.log(err));

        // This Socket
        socket.on('receive-message', msg => {
            console.log('recived', msg);

            this.setState({
                chat: [...this.state.chat, msg]
            });
        });

    }

    render() {



        const data = this.state.chat.map((params, index) =>
            <ItemChat
                key={index}
                name={params.name}
                message={params.message}
                chatID={params.chatID}
                dateTime={params.dateTime}
            />
        )
        return (

            <div>
                <div id="myDIV" onScroll="myFunction()">
                    <div class="card" >
                        <div id="content">
                            <div class="card">
                                <div>
                                    <div className="timeline">
                                        {data}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )




    }
}



