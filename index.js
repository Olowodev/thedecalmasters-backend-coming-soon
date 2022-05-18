const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const leadRoute = require('./routes/lead');
const cors = require('cors')





dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection successful!'))
    .catch((err) => {
        console.log(err);
    });

    app.use(express.json());

    app.use(cors())
    app.use('/api/lead', leadRoute)



app.listen(process.env.PORT || 5000, () => {
    console.log('backend server is running')
})