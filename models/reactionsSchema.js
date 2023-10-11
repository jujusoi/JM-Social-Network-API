const { Schema, model } = require('mongoose');
const formatDate = require('../config/middleware/changedate');

const reactionSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000,
    },
    createdAt: {
        type: String,
        default: function () {
            return formatDate(new Date());
        },
    },
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;