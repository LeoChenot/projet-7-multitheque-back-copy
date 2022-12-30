require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const userRoutes = require('./app/routes/route.user');
const mediaRoutes = require('./app/routes/route.media');


app.use('/api', userRoutes);
app.use('/api/user', mediaRoutes);



const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});


