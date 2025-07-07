const mongoose = require("mongoose");

const cableSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true },
        serialNumber: { type: String, required: true, unique: true },
        model: { type: String, required: true },
        status: { type: String, required: true },
        price: { type: Number, required: true },
        width: { type: Number, required: true }
    },
    {
        collection: "Cable",
        timestamps: true
    }
);

module.exports = mongoose.model("Cable", cableSchema);
