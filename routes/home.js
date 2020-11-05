const router = require("express").Router()
const path = require("path")


router.get('/',async(req,res)=>{
    console.log("seva")
    res.sendFile("/ng-templates/index.html", { root: path.join(__dirname + "/../static") })

})




module.exports = router;