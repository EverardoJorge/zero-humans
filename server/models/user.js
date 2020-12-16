const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let rolesValited = {
    values: ['ROOT', 'ADMIN', 'READER', 'VIEWER'],
    message: '#####{VALUE} ROL INVALITED########'
};

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required please']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Required Email']
    },
    password: {
        type: String,
        required: [true, 'The password in requerited']
    },
    picture: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: roleValited
    },
    status: {
        type: Boolean,
        default: true
    }
});

userSchema.methods.toJSON = () => {

}