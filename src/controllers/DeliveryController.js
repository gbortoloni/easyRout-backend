const { Delivery, validate } = require("../models/deliveries");

class DeliveryController {
  async showAll(req, res) {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  }

  async store(req, res) {
    const { error } = validate(req.body.delivery);
    if (error) return res.status(400).json(error.details[0].message);

    const delivery = new Delivery(req.body.delivery);
    try {
      await delivery.save();
      res.json(delivery);
    } catch (ex) {
      for (field in ex.errors) {
        console.log(ex.errors[field].message);
      }
    }
  }

  async delete(req, res) {
    const delivery = await Delivery.deleteOne({ _id: req.params.id });
    res.json(delivery);
  }
}

module.exports = new DeliveryController();
