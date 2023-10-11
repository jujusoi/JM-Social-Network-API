const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    if (this.friends.length === 0) {
        return 'No friends!';
    } else {
        return this.friends.length;
    };
});

userSchema.virtual('thoughtCount').get(function () {
    if (this.thoughts.length === 0) {
        return 'User has no thoughts. Head empty';
    } else {
        return this.thoughts.length;
    };
});

const User = model('user', userSchema);

module.exports = User;