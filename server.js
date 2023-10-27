const express = require('express');
const connectDB = require("./config");
const cors = require("cors");
const { PORT } = require("./env_exports");

const app = express();

//smiddlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//API endpoints
app.use('/user', require("./router"));

//Connect to the database before starting server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
})