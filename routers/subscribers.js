const express = require('express')
const router =express.Router()
const Subscriber=require('../models/subscriber')


router.post('/', async (req,res)=>{

    const subscriber = new Subscriber({
        message: "message from back end"
    })

    try {
      const sub=await subscriber.save()
      res.status(201).json(sub)
    }catch(err){
        res.status(400)
    }

})

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

module.exports=router