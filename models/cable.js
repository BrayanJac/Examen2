const mongoose = require("mongoose");

const cableShema = new mongoose.Schema(
    {
        id: {type: Number},
        serialNumber: {type: String},
        model: {type: String},
        status: {type: String},
        price: {type: Number},
        width: {type: Number},

    },
    { collection: "Cable" }
);

module.exports = mongoose.model("Cable", cableShema);