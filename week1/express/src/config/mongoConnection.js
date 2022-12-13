const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => new Promise(async (resolve) => {
    mongoose.connection.on('connected', () => {
        console.log('Database has connected successfully.');
    });
    mongoose.connection.on('error', (error) => {
        console.error(' Obs! There was an unexpected error connecting to the database.', error);
    });

    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        connectTimeoutMS: 10000,
    });
    mongoose.set('debug', true);
    resolve();
});
