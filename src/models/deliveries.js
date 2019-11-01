const mongoose = require("mongoose");
const Joi = require("joi");

const Delivery = mongoose.model(
  "Delivery",
  new mongoose.Schema(
    {
      nomeCliente: {
        type: String,
        minlength: 2,
        maxlength: 255,
        required: true
      },
      pesoCarga: {
        type: Number,
        min: 1,
        required: true
      },
      enderecoEntrega: {
        type: {
          logradouro: {
            type: String,
            required: true
          },
          numero: {
            type: Number,
            required: true
          },
          bairro: {
            type: String,
            required: true
          },
          complemento: {
            type: String
          },
          cidade: {
            type: String,
            required: true
          },
          estado: {
            type: String,
            required: true
          },
          pais: {
            type: String,
            required: true
          },
          geolocalizacao: {
            type: {
              latitude: {
                type: String,
                required: true
              },
              longitude: {
                type: String,
                required: true
              }
            },
            required: true
          },
          required: true
        }
      }
    },
    { timestamps: true }
  )
);

function validateDelivery(delivery) {
  const schema = {
    nomeCliente: Joi.string()
      .min(2)
      .max(255)
      .required(),
    pesoCarga: Joi.number()
      .min(1)
      .required(),
    enderecoEntrega: Joi.object().required()
  };

  return Joi.validate(delivery, schema);
}

exports.Delivery = Delivery;
exports.validate = validateDelivery;
