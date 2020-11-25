from flask import Flask, request, jsonify, json, make_response
import flask
import requests
import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


recive = ""


@app.route('/write', methods=['POST'])
def writeMessage():
    messages = []
    # mail = {

    #     "sender": "",
    #     "receiver": "",
    #     "message": "",
    #     "subject": "",
    #     "creationDate": ""
    # }

    data = request.json
    print(type(data))
    date = datetime.datetime.now()
    data["time"] = date
    print(data)

    # print(messages)
    file = open('db.json', 'w')
    json.dump(data, file, indent=4)

    return jsonify("message recived")


@app.route('/messages', methods=['GET', 'POST'])
def getMessages():

    receive = request.json
    print(receive)

    # if flask.request.method == 'POST':
    #     print(receive)
    #     print("crap")
    #     return json.dumps("user entered")

    if flask.request.method == 'POST':
        receivedMessages = []
        data = []

        with open('db.json') as json_file:
            data.append(json.load(json_file))
        print(data)
        for x in range(len(messages)):
            print(x)
            if messages[x]["receiver"] == str(receive):
                receivedMessages.append(message[x])
        print(receivedMessages)
        receivedMessages = json.dumps(receivedMessages)
        return receivedMessages


if __name__ == '__main__':  # -*- coding: utf-8 -*-
    app.run(debug=True)
