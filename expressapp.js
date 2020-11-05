// import require modules
const morgan = require('morgan')
const express = require('express')
// var session = require('express-session')
// var cookieParser = require('cookie-parser');
// const uuid = require("uuid").v4
// const MongoStore = require('connect-mongo')(session);
// const connection = require('./connection')
require('dotenv').config();
// const cors = require("cors")
// var bodyParser = require('body-parser') 


//  middelware 
const app = express()
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('dev'))
// app.use(cors())


//  express-session
// const sessionAge = 1000 * 60 * 60 * 365
// app.use(cookieParser(process.env.sessionSecret));

// app.use(session({ 
//     secret: process.env.sessionSecret,
//     name: process.env.SESSIONNAME,
//     resave: false,
//     saveUninitialized: false,
//     genid: function (req) {
//         return uuid() // use UUIDs for session IDs
//     },
//     store: new MongoStore({
//         mongooseConnection: connection ,
//         autoRemove: 'interval',
//         autoRemoveInterval: 10,
//         secret: process.env.SESSIONSTORESECRET
//     }),
//     cookie:{
//         secure:false,
//         sameSite: true,
//         httpOnly: true,
//         maxAge: sessionAge
//     }
    
// }));

app.use("/static",express.static(__dirname + "/static"))



// import routes
const Home = require('./routes/home')
const Seva = require('./routes/seva')


//  tell app to use require route
app.use('/home*', Home)
app.use('/api/seva', Seva)




// app routes
app.get("/",async(req,res,next)=>{
    res.redirect('/home')
})


// export app 
module.exports = app
