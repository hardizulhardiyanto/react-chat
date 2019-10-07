import React from 'react';
import { mdReact } from 'markdown-react-js';

export default class ItemChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      chat: []
    };  
  }

  handleClick = chatID => {
    const requestOptions = {
      method: 'DELETE'

    };
    fetch("http://localhost:3001/api/dataChat/" + chatID, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
      console.log(result);

      // do what you want with the response here
    });
  }


  render() {
    return (
      <div>

        {this.state.chat.map((chats, index) => {
          const chat = mdReact()(chats.message);
          return (
            <div key={index}>
              <div className="line text-muted"></div>
              <div className="separator text-muted">
                <time>{chat.dateTime}</time>
              </div>
              <article className="panel panel-primary">
                <div className="panel-heading icon">
                  <i>
                    <button className="button button5" onClick={() => { this.handleClick(chat.chatID) }} ></button>
                  </i>
                </div>
                <div className="panel-heading">
                  <h2 className="panel-title">{chat.name}</h2>
                </div>
                <div className="panel-body">
                  {chat.message}
                </div>
                <div className="panel-footer">
                  <small>{chat.chatID}</small>
                </div>
              </article>
            </div>
          );
        })}

      </div>
    )
  }
}