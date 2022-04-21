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
  * Test the /POST route
  */
describe('/POST and /GET covidTravel info', () => {
    xit('it should POST a covidTravel info', (done) => {
            let covidTravelInfo = {
                country_code: "RU",
                value: "True",
                valid_from: 2022,
                valid_to: 2023
            }
        chai.request('http://localhost:3000')
                .post('/covidTravel')
                .send(covidTravelInfo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body.status).to.equal("success");
                done();
                });

            })

 /*
  * Test the /GET route
  */

    it('it should GET all covidTravel info', (done) => {
        chai.request('http://localhost:3000')
              .get('/covidTravel')
              .end((err, res) => {
                  res.should.have.status(200);
                expect(res.body[0]).to.deep.include({country_code: "RU"});
              done();
            });
      });

    // })

  });
});