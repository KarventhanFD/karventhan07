const mongoose = require('mongoose');

const orderSckema = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
    createdAt: Date
})

const orderModel = mongoose.model('order', orderSckema);

module.exports = orderModel;