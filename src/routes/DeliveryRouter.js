const express = require("express");
const router = express.Router();

const DeliveryController = require("../controllers/DeliveryController");

router.get("/", DeliveryController.showAll);
router.post("/", DeliveryController.store);
router.delete("/:id", DeliveryController.delete);

module.exports = router;
