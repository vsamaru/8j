require('isomorphic-unfetch')
const { GAS } = require('../libs/GAS')
const { TG } = require('../libs/TG')
const jp = require('jsonpath')
const { withProps } = require('bottender')

const { router, route, text, payload, viber } = require('bottender/router')

const {
    condition,
    sendText
} = require('bottender-compose')
let config = { apiKey: "AIzaSyD3e0O_H0Rw5JbLII2VWMyGkFSTnksNmJg", authDomain: "w-2-b.firebaseapp.com", databaseURL: "https://w-2-b.firebaseio.com", projectId: "w-2--b", storageBucket: "w-2--b.appspot.com", messagingSenderId: "162546338092", appId: "1:162546338092:web:10f397f2dc70b7cfa2c489", measurementId: "G-9E29PK134T" }
const firebase = require('firebase')
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const db = firebase.database()
module.exports = async function App(context) {
    async function S(context) {
      //  let J = JSON.parse(JSON.stringify(context))
        let id = jp.query(context, '$..id')[0]
        console.log(id)
let msg = jp.query(context, '$..message')[0]
console.log(msg)
         GAS(id, msg)
        return await db.ref(id).update(J)
    }
    async function Say(context, props) {
        S(context)
        await context.sendText(`Hi, ${props.name}.`)
    }
    async function SayHi(context) {
        S(context)
        await context.sendText('OPA');
    }
    async function Unkn(context) {
        S(context)
        await context.sendMessage({
            type: 'text',
            min_api_version: 6,
            text: ' ',
            keyboard: AB,
            tracking_data: JSON.stringify(TEL)
        })
    }
    async function Unknown(context) {
        S(context)
    }
    async function SayHello(context) {
        S(context)
        await context.sendText(context._event.message.text)
        await context.sendText(context._event.message.contact.phoneNumber);
    }
    async function SayHe(context) {
     let td = jp.query(J, '$..tracking_data')[0] || ''
        GAS(id, tg)
        S(context)
        await context.sendText('ZALUPA');
    }
    async function HandleConversationStarted(context) {
        await context.sendText('Z')
    }
    async function Command(
        context, {
            match: {
                groups: {
                    command
                },
            },
        }
    ) {
        await context.sendText(JSON.stringify(context._session.user, null, 4))
        await context.sendText(JSON.stringify(context._session._state.count, null, 4))
        await context.sendText(JSON.stringify(context._session._state.last, null, 4))
        await context.sendText(`Executing command: ${command}`)
        await context.sendMessage({
            type: 'text',
            min_api_version: 6,
            text: ' ',
            keyboard: TEL
        })
    }
    if (context.event.isMessage) {
        viber.conversationStarted(HandleConversationStarted)
        const count = context.state.count + 1;
        // const last = context.state.count + 'X'
        context.setState({
            count,
            last
        })
        return router([
            text(/^\/(?<command>\S+)$/i, Command),
            text('hi', Say),
            text(['Kyiv', 'Oblast'], SayHello),
            text(['ho', 'ha', 'he'], SayHe),
            text('*', Unkn),
            route('*', Unknown),
        ])
    }


}


var TEL = {
    "type": "keyboard",
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 1,
    "Buttons": [
        {
            "ActionBody": 'Kyiv',
            "ActionType": "share-phone",
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#ff80c0\">KYIV</b></font>",
            "BgColor": "#555555",
            "Silent": true,
            "Columns": 3
        }, {
            "ActionBody": 'Oblast',
            "ActionType": "share-phone",
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#555555\">OBLAST</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 3
        }
    ]
}
var HZ = {
    "type": "keyboard",
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 1,
    "Buttons": [
        {
            "ActionBody": 'Kyiv',
            "ActionType": "share-phone",
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#ff80c0\">KYIV</b></font>",
            "BgColor": "#555555",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": 'Oblast',
            "ActionType": "share-phone",
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#555555\">OBLAST</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": '1',
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#ff80c0\">1</b></font>",
            "BgColor": "#555555",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": '2',
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#555555\">2</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": 'z',
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#ff80c0\">X</b></font>",
            "BgColor": "#555555",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": 'x',
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#555555\">Z</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 1
        }
    ]
}
var AB = {
    "type": "keyboard",
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 1,
    "Buttons": [
        {
            "ActionBody": 'Kyiv',
            "ActionType": "share-phone",
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#ff80c0\">one</b></font>",
            "BgColor": "#555555",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": 'Oblast',
            "ActionType": "share-phone",
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#ff80c0\">two</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": '/1',
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#c7fff2\">1</b></font>",
            "BgColor": "#555555",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": '/2',
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#c7fff2\">2</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": '/z',
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#555555\">X</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 1
        }, {
            "ActionBody": '/x',
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#555555\">Z</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 1
        }
    ]
}
