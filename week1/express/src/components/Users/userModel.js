const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    hashed_password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

UserSchema
    .virtual('password')
    .set(function (password) {
        this.hashed_password = password;
    });

UserSchema.pre('save', function (next) {
    const user = this;

    if (user.hashed_password === undefined) {
        return next();
    }
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) console.log(err);
        bcrypt.hash(user.hashed_password, salt, (err, hash) => {
            if (err) console.log(err);
            user.hashed_password = hash;
            next();
        });
    });
});

UserSchema.methods = {
    comparePassword(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    },
};

// UserSchema.methods.validatePassword = async function validatePassword(data) {
//     return bcrypt.compare(data, this.password);
// };

module.exports = mongoose.model('User', UserSchema);
