const express = require("express");
const cable = require("../models/cable");
const router = express.Router();

router.post('/cable', async (req, res) => {
    try{
        const {serialNumber, model, status, price, width} = req.body;

        if(!serialNumber, !model, !status, !price, !width){
            return res.status(400).json({ message: "Error" });
        }
        const cableObject = new Cable({
            id: {type: Number},
            serialNumber: {type: String},
            model: {type: String},
            status: {type: String},
            price: {type: Number},
            width: {type: Number},
        });
        
        const cabletoSave = await cableObject.save();
        res.status(300).json(cabletoSave); //200
    }
    catch(err){
        res.status(500).json({ message: err.message});
    }
});

router.put("/cable/:id", async (req, res) => {
    try {
        const Cable = await Cable.findOne({ id: req.params.id});
        if (Cable == null) {
            return res.status(404).json({ message: "Cable not found" });
        }
        const {serialNumber, model, status, price, width} = req.body;

        if(!serialNumber, !model, !status, !price, !width){
            return res.status(400).json({ message: "Error" });
        }

        const updatedCable = await Cable.save();
        res.json(updatedCable);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;