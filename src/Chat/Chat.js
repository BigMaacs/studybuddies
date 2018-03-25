import React, { Component } from 'react';
import './Chat.css';


class Chat extends Component {

  render() {
    return (
      <div>
        <div id="live-chat">
          <header className="clearfix">
            <a href="#" className="chat-close">x</a>
          <h4>React Fundamentals</h4>
          <span className="chat-message-counter">3</span>
          </header>
          <div className="chat">
            <div className="chat-history">
              <div className="chat-message clearfix">
                <img src="http://gravatar.com/avatar/" alt="" width="32" height="32" />
              <div className="chat-message-content clearfix">
                  <span className="chat-time">13:35</span>

                <h5>Big Mac</h5>

              <p>Today's class is about React Fundamentals</p>
                </div>
              </div>
              <hr />
            <div className="chat-message clearfix">
                <img src="http://gravatar.com/avatar/" alt="" width="32" height="32" />
              <div className="chat-message-content clearfix">
                  <span className="chat-time">13:37</span>

                <h5>Student</h5>

              <p>What is the differnece between state and props?</p>
                </div>
              </div>

              <hr />

            </div>
            <p className="chat-feedback">Your Instructor is typing…</p>
              <form action="#">

                <fieldset>

                  <input type="text" placeholder="Type your message…" autofocus />
                <input type="hidden" />

                </fieldset>

              </form>
          </div>
        </div>
      </div>

    );
  }
}


export default Chat;
