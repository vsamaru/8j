
const  jp  = require('jsonpath')
const { withProps,ConsoleBot} = require('bottender')
const { router,route, text,payload,viber } = require('bottender/router')
const { branch,condition, sendText } = require('bottender-compose');
let config = { apiKey: "AIzaSyD3e0O_H0Rw5JbLII2VWMyGkFSTnksNmJg", authDomain: "w-2-b.firebaseapp.com", databaseURL: "https://w-2-b.firebaseio.com", projectId: "w-2--b", storageBucket: "w-2--b.appspot.com", messagingSenderId: "162546338092", appId: "1:162546338092:web:10f397f2dc70b7cfa2c489", measurementId: "G-9E29PK134T" }//{"apiKey":"AIzaSyCWHV-59Nzhr050jL_Uk0kDQU56hmYRLS8","authDomain":"vsamaru.firebaseapp.com","databaseURL":"https://vsamaru.firebaseio.com","projectId":"vsamaru","storageBucket":"vsamaru.appspot.com","messagingSenderId":"685290667281","appId":"1:685290667281:web:469d5dd61070d5404460b0","measurementId":"G-86X0K1BHN5"}
const firebase =  require('firebase')
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
const db = firebase.database()

const bot = new ConsoleBot();



bot.onEvent(
  branch(
    context => true,
    sendText('You are the lucky one.'),
    sendText('Too bad.')
  )
)

// function DB(user, data){
//   //  const ref = db.ref(user)
//     return ref.update(user,data)
// }

  

module.exports = async function App(context) {

async function S(context) {
 let J = JSON.parse(JSON.stringify(context))
 let re = jp.query(J, '$..id')[0]
    .replace(/\%/g, '%25')
    .replace(/\./g, '%2E')
    .replace(/\#/g, '%23')
    .replace(/\$/g, '%24')
    .replace(/\//g, '%2F')
    .replace(/\[/g, '%5B')
    .replace(/\]/g, '%5D')

  // await context.sendMessage({
  //   type: 'text',
  //   min_api_version: 6,
  //   text: ' ',
  //    keyboard: AB,
  //    tracking_data: JSON.stringify([99,777])
  // })

    return await db.ref(re).update(J)
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
//DB('USR/ABC' , context._event)

  await context.sendMessage({
    type: 'text',
    min_api_version: 6,
    text: ' ',
     keyboard: AB,
    
  })
}
async function Unknown(context) {

S(context)
 
 //

  // await context.sendMessage({
  //   type: 'text',
  //   min_api_version: 6,
  //   text: ' ',
  //    keyboard: HZ
  // })
}
async function SayHello(context) {
  S(context)
  await context.sendText(context._event.message.text)
  await context.sendText(context._event.message.contact.phoneNumber);
  
   //await DB('USR/ABC', context._event)
  
  
  
}
async function SayHe(context) {
  S(context)
  await context.sendText('ZALUPA');
}
async function HandleConversationStarted(context) {
  await context.sendText('Z')
}


async function Command(
  context,
  {
    match: {
      groups: { command },
    },
  }
) {
  //await context.sendText(`${context.session.id}`)
   await context.sendText(JSON.stringify(context._session.user,null,4))
   await context.sendText(JSON.stringify(context._session._state.count,null,4))
   await context.sendText(JSON.stringify(context._session._state.last,null,4))
      

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
   const last = context.state.count + 'X'
  context.setState({
    count,last
  })



// return  await context.sendMessage({
//   type: 'text',
//   min_api_version: 6,
//   text: 'Hello',
//    keyboard: TEL
// })
  //`Count: ${count}`,TEL)

 // await context.sendText(`${context.session.id}`)

  //return withProps(Say, { name: count })

    return router([
     
       text(/^\/(?<command>\S+)$/i, Command),
      
    // return the `SayHi` action when receiving "hi" text messages
    text('hi', Say),
    // return the `SayHello` action when receiving "hello" text messages
    text(['Kyiv','Oblast'], SayHello),

        // return the `SayHi` action when receiving "hi", "hello" or "hey" text messages
    text(['ho', 'ha', 'he'], SayHe),
    text('*', Unkn),
     route('*', Unknown),
    
  ])

  }
}

// 




// module.exports = async function App(context) {
//   return withProps(SayHi, { name: 'Bob' });
// }

var TEL =  {
  
    "type": "keyboard",
      "ButtonsGroupColumns":6,
      "ButtonsGroupRows":1,
      "Buttons":[

         {
            "ActionBody":'Kyiv',
            "ActionType":"share-phone",
            "TextVAlign":"top",
           "TextHAlign":"center",
           "Text":"<b><font color=\"#ff80c0\">KYIV</b></font>",
            "BgColor":"#555555",
         "Silent":true,
            "Columns":3
         },
         {
            "ActionBody":'Oblast',
           "ActionType":"share-phone",
            "TextVAlign":"top",
            "TextHAlign":"center",
           "Text":"<b><font color=\"#555555\">OBLAST</b></font>",
           "BgColor":"#c7fff2",
          "Silent":true,
           "Columns":3
          
         }
      ]
   }
 

   var HZ =  {
  
    "type": "keyboard",
      "ButtonsGroupColumns":6,
      "ButtonsGroupRows":1,
      "Buttons":[

         {
            "ActionBody":'Kyiv',
            "ActionType":"share-phone",
            "TextVAlign":"top",
           "TextHAlign":"center",
           "Text":"<b><font color=\"#ff80c0\">KYIV</b></font>",
            "BgColor":"#555555",
         "Silent":true,
            "Columns":1
         },
         {
            "ActionBody":'Oblast',
           "ActionType":"share-phone",
            "TextVAlign":"top",
            "TextHAlign":"center",
           "Text":"<b><font color=\"#555555\">OBLAST</b></font>",
           "BgColor":"#c7fff2",
          "Silent":true,
           "Columns":1
          
         },         {
          "ActionBody":'1',
          
          "TextVAlign":"top",
         "TextHAlign":"center",
         "Text":"<b><font color=\"#ff80c0\">1</b></font>",
          "BgColor":"#555555",
       "Silent":true,
          "Columns":1
       },
       {
          "ActionBody":'2',
        
          "TextVAlign":"top",
          "TextHAlign":"center",
         "Text":"<b><font color=\"#555555\">2</b></font>",
         "BgColor":"#c7fff2",
        "Silent":true,
         "Columns":1
        
       },         {
        "ActionBody":'z',
       
        "TextVAlign":"top",
       "TextHAlign":"center",
       "Text":"<b><font color=\"#ff80c0\">X</b></font>",
        "BgColor":"#555555",
     "Silent":true,
        "Columns":1
     },
     {
        "ActionBody":'x',
       
        "TextVAlign":"top",
        "TextHAlign":"center",
       "Text":"<b><font color=\"#555555\">Z</b></font>",
       "BgColor":"#c7fff2",
      "Silent":true,
       "Columns":1
      
     }
      ]
   }
   var AB =  {
  
    "type": "keyboard",
      "ButtonsGroupColumns":6,
      "ButtonsGroupRows":1,
      "Buttons":[

         {
            "ActionBody":'Kyiv',
            "ActionType":"share-phone",
            "TextVAlign":"top",
           "TextHAlign":"center",
           "Text":"<b><font color=\"#ff80c0\">one</b></font>",
            "BgColor":"#555555",
         "Silent":true,
            "Columns":1
         },
         {
            "ActionBody":'Oblast',
           "ActionType":"share-phone",
            "TextVAlign":"top",
            "TextHAlign":"center",
           "Text":"<b><font color=\"#ff80c0\">two</b></font>",
           "BgColor":"#c7fff2",
          "Silent":true,
           "Columns":1
          
         },         {
          "ActionBody":'/1',
          
          "TextVAlign":"top",
         "TextHAlign":"center",
         "Text":"<b><font color=\"#c7fff2\">1</b></font>",
          "BgColor":"#555555",
       "Silent":true,
          "Columns":1
       },
       {
          "ActionBody":'/2',
        
          "TextVAlign":"top",
          "TextHAlign":"center",
         "Text":"<b><font color=\"#c7fff2\">2</b></font>",
         "BgColor":"#c7fff2",
        "Silent":true,
         "Columns":1
        
       },         {
        "ActionBody":'/z',
       
        "TextVAlign":"top",
       "TextHAlign":"center",
       "Text":"<b><font color=\"#555555\">X</b></font>",
        "BgColor":"#c7fff2",
     "Silent":true,
        "Columns":1
     },
     {
        "ActionBody":'/x',
       
        "TextVAlign":"top",
        "TextHAlign":"center",
       "Text":"<b><font color=\"#555555\">Z</b></font>",
       "BgColor":"#c7fff2",
      "Silent":true,
       "Columns":1
      
     }
      ]
   }
 
