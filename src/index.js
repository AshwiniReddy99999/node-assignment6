const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


let result=dotenv.config();
//connect to DB
if (result.error) {
    throw result.error
  }
  
  console.log(result.parsed)

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3000, () => console.log('Server running......'));

