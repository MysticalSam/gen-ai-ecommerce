//Add mongodb url
const mongoose = require('mongoose')
const mongodbUrl = "mongodb+srv://mysticalsam:83SuJAHlSKsZHFAb@cluster0.qk0yzih.mongodb.net/?retryWrites=true&w=majority"

//Create a function to connect to mongodb

const connectToMongo = async () => {
    await mongoose.connect(mongodbUrl, console.log("Connected to MongoDB"))
}

// Wait for database to connect, logging an error if there is a problem
connectToMongo().catch((err) => console.log(err));

//Export the module
module.exports = connectToMongo;