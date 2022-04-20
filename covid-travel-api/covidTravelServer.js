const express = require('express')
const mongoose = require('mongoose')
  app = express()
  port = process.env.PORT || 3000;
  const uri = 'mongodb://mongo:27017/api';
  const covidTravel = require('./models/covidTravelModels')

  // mongoose instance connection url connection
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(res=>{
     console.log("Mongo DB Connected!")
    }).catch(err => {
     console.log(Error, err.message);
   })

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const routes = require('./routes/covidTravelRoutes'); //importing route
routes(app); //register the route
app.get('*', (req, res)=>{
res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);
console.log('CovidTravel RESTful API server started on: ' + port);

module.exports = app;