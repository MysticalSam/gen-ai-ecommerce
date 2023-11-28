const app = require('.');
const connectToMongo = require('./config/db');

//define port
const port = process.env.PORT || 4000;

//listen to port

app.listen(port, () => {
    //connect with mongodb
    connectToMongo();
    console.log(`E-commerce API Server is running on port ${port}`);
})
