const express = require('express')
const router = express.Router()
const user = require('../models/user-model')
const { body, validationResult } = require('express-validator');

router.post("/createuser",[body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password','incorrect Password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        await user.create({
            name:req.body.name,
            userId: req.body.userId,
            password:req.body.password,
            email: req.body.email
        })
    res.json({success:true})
    } catch (err) {
        console.log(err);
        res.json({success:false})
    }
})
router.post("/loginuser",[body('email').isEmail(),
body('password','incorrect Password').isLength({ min: 5 })
] ,async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email
    try {
        let userdata=await user.findOne({email})
        if(!userdata){
            return res.status(400).json({ errors: "Try logging with correct credentials" });
        }
        if(req.body.password!==userdata.password){
            return res.status(400).json({ errors: "Try logging with correct credentials" });
        }
        return res.json({success:true})
    } catch (err) {
        console.log(err);
        res.json({success:false})
    }
})

module.exports=router