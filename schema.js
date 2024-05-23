const Joi = require("joi");

module.exports.listingSchema = Joi.object({
     listing : Joi.object({
        title : Joi.string().min(1).max(60).required(),
        author : Joi.string().min(1).max(60).required(),
        price : Joi.number().min(1).required(),
        link : Joi.string().allow("", null),
     }).required()
});

module.exports.reviewSchema = Joi.object({
   review : Joi.object({
      rating : Joi.number().min(1).max(5).required(),
      comment : Joi.string().min(2).max(70).required(),
   }).required()
});