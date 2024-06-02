const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'all fields are required'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'all fields are required'],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, 'all fields are required'],
        trim: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Order', OrderSchema)