const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.path('firstName').validate(firstName => {
    const firstNameRegex = /^\w((\w|\s){2,10})$/;
    return firstNameRegex.test(firstName);
}, 'user.firstName is not valid');

userSchema.path('lastName').validate(lastName => {
    const lastNameRegex = /^\w((\w|\s){2,10})$/;
    return lastNameRegex.test(lastName);
}, 'user.lastName is not valid');

userSchema.path('username').validate(username => {
    const usernameRegex = /^\w{5,10}$/;
    return usernameRegex.test(username);
}, 'user.username is not valid');

module.exports = mongoose.model('users', userSchema);
