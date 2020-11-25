import React from 'react'
import './Received.css'
import { connect } from "react-redux";


function Sent({ sentMessages }) {

    return (
        <div className="inbox-container">
            <div className="wrapper">
                <ul className="messageList">
                    {sentMessages.map((message, index) => {
                        return (
                            <li key={index} className="row">
                                <div id="from">
                                    {message["message"].subject}
                                </div>
                                <div id="data">
                                    {message["message"].message}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}



function mapStateToProps(state) {
    console.log(state.messages.sentMessages)
    return {
        sentMessages: state.messages.sentMessages
    };
}

export default connect(mapStateToProps)(Sent);

