import React, { useState } from 'react'
import './../container/Home.css';


const Home = () => {
    const [userID, updateUserID] = useState({ "userID": 0 });

    const handleChange = e => {
        updateUserID({
            ...userID,

            [e.target.name]: e.target.value.trim()

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = userID;

        const header = {
            "Content-Type": "application/json",
        }

        fetch('http://localhost:5000/messages', {
            method: "POST",
            // mode: "no-cors",
            headers: header,
            body: JSON.stringify(user)

        }).then(function (response) {
            return response.json();
        }).then(function (text) {
            alert(text)
        }).catch(error => {
            console.log(error);
        })
    };

    return (
        <div className="inbox-container">
            <div className="wrapper">
                <h1>Messaging App</h1>
                <form>
                    <input onChange={handleChange} name="userID" placeholder="Enter user ID"></input>
                    <button onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Home;