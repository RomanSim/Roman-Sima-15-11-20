import React, { useState } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import './../container/Received.css'






const Received = ({ messages }) => {


    const handleSubmit = (e) => {
        e.preventDefault();

        const header = {
            "Content-Type": "application/json",
        }

        fetch('http://localhost:5000/messages', {
            method: "POST",
            // mode: "no-cors",
            headers: header,
            body: "1"
        }).then(function (response) {
            console.log(response.json())
        }).catch(error => {
            console.log(error);
        })
    };



    return (
        <div className="inbox-container">
            <div className="wrapper">
                <button onClick={handleSubmit}>Show Messages</button>
                <ul className="messageList">
                    {messages.map((message, key) => {
                        return (
                            <li key={message.id} className="row">
                                <div id="from">
                                    {message.from}
                                </div>
                                <div id="data">
                                    {message.data}
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
    return {
        messages: state.messages.receivedMessages
    };
}

export default connect(mapStateToProps)(Received);






