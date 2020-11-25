import { Label } from '@material-ui/icons'
import React, { useState } from 'react'
import './../container/Received.css';
import { connect } from "react-redux";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sentMessage } from './../reducers/mailBox/mailBox-actions'





const Compose = ({ sentMessage }) => {

    // const initialFormData = ({
    //     subject: "",
    //     message: "",
    //     from: "",
    //     to: ""
    // });

    const [formData, updateFormData] = useState({ subject: "", message: "", from: "", to: "" });

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace

            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        let data = {
            from: formData["from"],
            to: formData["to"],
            message: formData["message"],
            subject: formData["subject"]
        }

        const header = {
            "Content-Type": "application/json",
        }

        // ... submit to API or something
        fetch('http://localhost:5000/write', {
            method: "POST",
            // mode: "no-cors",
            headers: header,
            body: JSON.stringify(data)

        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    };
    return (
        <div className="inbox-container">
            <div className="wrapper2">
                <Form style={{ textAlign: "center", width: "300px", marginLeft: "auto", marginRight: "auto" }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Subject</Form.Label><br />
                        <Form.Control name="subject" onChange={handleChange} placeholder="subject" /><br />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label><br />
                        <Form.Control name="message" onChange={handleChange} rows={3} placeholder="Write a message" /><br />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>From</Form.Label><br />
                        <Form.Control name="from" onChange={handleChange} placeholder="From" /><br />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>To</Form.Label><br />
                        <Form.Control name="to" onChange={handleChange} placeholder="To" /><br />
                    </Form.Group>
                    {/* <Button onClick={() => sentMessage(formData)}>Send</Button> */}
                    <Button onClick={handleSubmit}>Send</Button>
                </Form>
            </div>
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         messages: state.messages.sentMessages
//     };
// }
const mapDispatchToProps = dispatch => {
    return {
        sentMessage: (formData) => dispatch(sentMessage(formData))
    }
}
export default connect(null, mapDispatchToProps)(Compose);






