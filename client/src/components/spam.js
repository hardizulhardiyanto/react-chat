import React from 'react';


export default class ItemChat extends React.Component {


  handleClick(chatID) {



    const requestOptions = {
      method: 'DELETE'


    };
    fetch("http://localhost:3001/api/dataChat/" + chatID, requestOptions).then((response) => {
      return response.json();

      
    }).then((result) => {
      
      console.log('data result > ', result);
      


      // do what you want with the response here


    });
  }


  render() {
    return (
      <div>
        <div className="line text-muted"></div>

        <div className="separator text-muted">

          <time>{this.props.dateTime}</time>
        </div>


        <article className="panel panel-primary">



          <div className="panel-heading icon">
            <i>
              <button className="button button5" onClick={() => { this.handleClick(this.props.chatID) }} ></button>
            </i>
          </div>


          <div className="panel-heading">
            <h2 className="panel-title">{this.props.name}</h2>
          </div>



          <div className="panel-body">
            {this.props.message}
          </div>



          <div className="panel-footer">
            <small>{this.props.chatID}</small>
          </div>


        </article>
      </div>
    )
    
  }
}