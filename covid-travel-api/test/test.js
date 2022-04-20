let mongoose = require("mongoose");
const CovidTravel = require('../models/covidTravelModels')

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const { expect } = chai;


chai.use(chaiHttp);

describe('CovidTravels', () => {

 /*
  * Test the /GET route
  */
  describe('/GET covidTravel info', () => {
      it('it should GET all covidTravel info', (done) => {
        chai.request('http://localhost')
              .get('/covidTravel')
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  expect(res.body).to.equal("success");
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});