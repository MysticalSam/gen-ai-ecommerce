//Add mongodb url
const mongoose = require('mongoose')
const mongodbUrl = process.env.MONGO_DB_URL

//Create a function to connect to mongodb

const connectToMongo = async () => {
    await mongoose.connect(mongodbUrl, console.log("MongoDB Connection Made"))
}

// Wait for database to connect, logging an error if there is a problem
connectToMongo().catch((err) => console.log(err));

//Export the module
module.exports = connectToMongo;