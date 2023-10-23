require('dotenv').config()
const PORT = process.env.PORT;
const express = require('express');
const app = express();

const userRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/log')


app.use( middlewareLogRequest); 

app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server mlaku cak..`);
});
