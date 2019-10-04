import React from 'react';
import axios from 'axios';
import ItemChat from './ItemChat';



export default class ListItem extends React.Component {
    state = {
        _id: '',
        name: '',
        message: '',
        date: '',
        chat: []

    }


    componentDidMount() {
        axios.get(`http://localhost:3001/api/dataChat`)
            .then(res => {

                this.setState({ chat: [...res.data] });
                console.log('dataState > ', res.data);
            })
            .catch(err => console.log(err));


    }

    render() {

        const ListNode = this.state.chat.map((params, index) => <ItemChat key={index} name={params.name} message={params.message} chatID={params._id} dateTime={params.dateTime} />)
        return (
            <div>
                <div class="card-body" >
                    <div id="myDIV" onScroll="myFunction()">
                        <div id="content">
                            <div className="timeline">
                                {ListNode}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



