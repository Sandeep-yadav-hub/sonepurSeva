const router = require("express").Router()
var twilio = require('twilio');
require('dotenv').config();

const sevaService = require('../libs/seva')
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = twilio(accountSid, authToken);

router.post('/create/',async(req,res)=>{
    console.log(req.body)
    const {name, seva, phonenumber, address} = req.body
    var sevaObj = await sevaService.createSeva(name, seva, phonenumber, address)


    var body = `customer Name : ${sevaObj.name},
                service they need : ${sevaObj.seva},
                phone Number : ${sevaObj.phonenumber},
                address : ${sevaObj.address} `
    try {
        send = await client.messages.create({
            body: body,
            from: '+17183959663',
            to: '+91' + 9506370145
        });

        
        res.json(sevaObj)
    } catch (err) {
        res.json(err)
    }
})  

module.exports = router;
