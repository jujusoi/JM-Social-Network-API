const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const userdata = require('./userdata.json');
const thoughtsdata = require('./thoughtsdata.json');
const reactiondata = require('./reactiondata.json');

connection.on('error', (err) => err);

connection.once('open', async() => {
    try {
        const userCollection = await connection.db.listCollections({ name: 'users' });
        const thoughtCollection = await connection.db.listCollections({ name: 'thoughts' });
        if (userCollection && thoughtCollection) {
            await connection.dropCollection('users');
            await connection.dropCollection('thoughts');
            await connection.dropCollection('reactions');
        };
        await User.insertMany(userdata);
        await Reaction.insertMany(reactiondata);
        await Thought.insertMany(thoughtsdata);
        console.log('seeded');
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});