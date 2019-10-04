import React from 'react';

function Form() {
  return (
    <div class="container">

      <div class="timeline">
        <div class="line text-muted"></div>

        <div class="separator text-muted">
          <time>26. 3. 2015</time>
        </div>
        <article class="panel panel-primary">


          <div class="panel-heading icon">
            <i class="glyphicon glyphicon-plus"></i>
          </div>



          <div class="panel-heading">
            <h2 class="panel-title">New content added</h2>
          </div>



          <div class="panel-body">
            Some new content has been added.
                </div>



          <div class="panel-footer">
            <small>Footer is also supported!</small>
          </div>


        </article>


        <article class="panel panel-primary">

          <div class="panel-heading icon">
            <i class="glyphicon glyphicon-plus"></i>
          </div>

          <div class="panel-body">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Your Name" />
                <small id="emailHelp" class="form-text text-muted">Enter Here Your Name</small>
              </div>

              <div class="form-group">

                <textarea class="form-control" id="inputText" rows="3" placeholder="Write Your Chat Here"></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>

            </form>
          </div>


        </article>


      </div>

    </div>

  )
}

export default Form;


