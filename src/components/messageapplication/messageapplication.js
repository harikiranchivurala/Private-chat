import React from 'react';

const message=()=>{
    return(
        <div className="App">
          <div id="container">
            <aside id="sidebar" class="sidebar"> 
            <div className="se">Users</div>
      
            <div><button className="si">Amelia</button></div>
            <div><button className="si">Harper</button></div>
            <div><button className="si">Clarie</button></div>
            <div><button className="si">Evelyn</button></div>
            <div><button className="si">Briony</button></div>
            <div><button className="si">Elowen</button></div>
            <div><button className="si">Verity</button></div>
            <div><button className="si">Aditya</button></div>
            <div><button className="si">Adline</button></div>
            <div><button className="si">Sophia</button></div>
     
          </aside>
         
            <section id="main">
              <section id="message-list">User Name</section>
              <section id="new-message">
                <div className="text">
                  <input type="text" />
                <input type="submit" value="Send" />
                </div>
              </section>
            </section>
          </div>
        </div>
      );
}
export default message;