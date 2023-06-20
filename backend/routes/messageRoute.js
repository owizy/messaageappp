const express = module.require('express')
const router = express.Router()
const Message = module.require('../model/messageModel')

//get all messages

router.get('/getallmessages', async(req, res)=>{

        try{

              const allMessages = await Message.find()
              res.json({
                    messages:allMessages
              })

        }catch(err){
              res.send("Ooops! Error occured! Unable to fetch data from the db due to " + err)
        }
})

router.get('/getonemessage', async(req, res)=>{
       res.send("this is just one message")
})

router.post('/postmessage', async(req, res)=>{
      
          const user_message = new Message({
                sender:req.body.sender,
                message:req.body.message,
                phone:req.body.phone
          })

       try{
               const posted_message =  await user_message.save()
               res.send(posted_message)

       }catch(err){
              res.send("Ooops! Message failed to be posted to db due to " + err)
       }
})

router.patch('/update/:update_id',async(req,res)=>{
      try{
         const update = await Message.findByIdAndUpdate({_id:req.params.update_id},req.body)
            res.json({
                  update:update
            })
      }catch(err){
            res.send("error due to"+err)
      }
})
router.delete("/delete/:message_id",async(req,res)=>{
      try{
            const deletes = await Message.findByIdAndDelete({_id:req.params.message_id})
            res.send(deletes)
      }catch(err){
        console.log(err)
      }
})
module.exports = router