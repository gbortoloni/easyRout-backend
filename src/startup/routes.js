const cors = require("cors");
const express = require("express");

const deliveries = require("../routes/DeliveryRouter");

module.exports = function(app) {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use("/api/deliveries", deliveries)
}