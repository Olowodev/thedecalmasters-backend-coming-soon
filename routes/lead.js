const Lead = require('../models/Lead');

const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('THIS APP IS WORKING')
})

//REGISTER
router.post('/', async (req,res)=>{
    const newLead = new Lead({
        email: req.body.email
    })

    try {
        const savedLead = await newLead.save();
        res.status(201).json(savedLead);
    }   catch (err) {
            if (err.code === 11000) {
                res.status(409).json("Email has been registered")
            } else {
                res.status(500).json(err)
            }
    }
});

module.exports = router