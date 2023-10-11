const connection = require('../config/connection');
const { User } = require('../models');
const userdata = require('./userdata.json');

connection.on('error', (err) => err);

connection.once('open', async() => {
    try {
        await connection.dropCollection('users');
        await User.insertMany(userdata);
        console.log('seeded');
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});