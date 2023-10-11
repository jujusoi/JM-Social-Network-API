const { Schema, model } = require('mongoose');

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
        type: Date,
        default: Date.now,
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
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;