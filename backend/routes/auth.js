const express = module.require('express')
const router = express.Router()


//signup routing starts here
router.post('/register', (req, res)=>{
      res.send("New user signed up")
})
  
module.exports = router