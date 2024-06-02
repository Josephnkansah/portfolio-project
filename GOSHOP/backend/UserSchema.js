const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'all fields are required'],
        trim: true,
        unique: [true, 'username is not available'],
        maxLenght: 50
    },
    email: {
        type: String,
        required: [true, 'all fields are required'],
        trim: true,
        unique: [true, 'user exist'],
        maxLenght: 50
    },
    password: {
        type: String,
        required: [true, 'all fields are required'],
        trim: true,
        maxLenght: 50
    }
})

UserSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10)
})

UserSchema.methods.ComparePassword = async function(userpassword) {
    const isMatch = await bcrypt.compare(userpassword, this.password)
    return isMatch
}

module.exports = mongoose.model('User', UserSchema)