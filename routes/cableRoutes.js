const express = require("express");
const Cable = require("../models/cable");
const router = express.Router();

router.post('/cable', async (req, res) => {
    try {
        const cableObject = new Cable({
            id: req.body.id,
            serialNumber: req.body.serialNumber,
            model: req.body.model,
            status: req.body.status,
            price: req.body.price,
            width: req.body.width,
        });

        const savedCable = await cableObject.save();
        res.status(201).json(savedCable); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/cable/:id", async (req, res) => {
    try {
        const foundCable = await Cable.findOne({ id: req.params.id });
        if (!foundCable) {
            return res.status(404).json({ message: "Cable not found" });
        }

        const { serialNumber, model, status, price, width } = req.body;

        if (!serialNumber || !model || !status || !price || !width) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        foundCable.serialNumber = serialNumber;
        foundCable.model = model;
        foundCable.status = status;
        foundCable.price = price;
        foundCable.width = width;

        const updatedCable = await foundCable.save();
        res.json(updatedCable);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
