const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user_id : String,
    products:[],
  
},
{collection:'usercart'}
)

const cart = mongoose.model("cart",cartSchema);

module.exports = cart;