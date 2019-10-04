import React from 'react';



function ItemChat(props) {
  return (
    <div>
      <div className="line text-muted"></div>

      <div className="separator text-muted">

        <time>{props.dateTime}</time>
      </div>

    
      <article className="panel panel-primary">


        <div className="panel-heading icon">
          <i>
            <a href="index.html" class="glyphicon glyphicon-minus white" role="button" id={props.chatID}>
              </a>
          </i>
        </div>


        <button onClick={() => { this.handleClick(this.props.chatID) }} class="glyphicon glyphicon-minus white border-radius: 50%;" role="button">
                </button>



        <div className="panel-heading">
          <h2 className="panel-title">{props.name}</h2>
        </div>



        <div className="panel-body">
          {props.message}
        </div>



        <div className="panel-footer">
          <small>{props.chatID}</small>
        </div>


      </article>
    </div>
  
  );
  
}


export default ItemChat;
