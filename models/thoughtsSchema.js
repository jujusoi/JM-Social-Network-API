const { Schema, model } = require('mongoose');
const formatDate = require('../config/middleware/changedate');

const thoughtSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000,
    },
    createdAt: {
        type: String,
        default: function() {
            return formatDate(new Date());
        },
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reaction',
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;