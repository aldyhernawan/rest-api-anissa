const express = require('express');
const personnelModel = require('../models/personnelModel');
const positionModel = require('../models/positionModel');
const groupModel = require('../models/groupModel');
const userModel = require('../models/userModel');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
    const data = new userModel({
        username: req.body.username,
        email: req.body.email,
        personel: req.body.personel
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await userModel.findById(req.params.id).populate({
            path: 'personnel',
            model: personnelModel,
            populate: [{
                path: 'position',
                model: positionModel,
            }, {
                path: 'group',
                model: groupModel,
            }],
        });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;