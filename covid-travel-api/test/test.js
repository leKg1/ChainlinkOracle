//let mongoose = require("mongoose");
const CovidTravel = require('../models/covidTravelModels')

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const { expect } = chai;


chai.use(chaiHttp);

describe('CovidTravels', () => {

  before(async(done) => {
    // console.log('deleting all')
    chai.request('http://localhost:3000')
    .delete('/covidTravel')
    // .send(info)
    .end((err, res) => {
      // console.log('err',err)
      // console.log('res',res)
        // res.should.have.status(200);
    })
    done()

  })

 /*
  * Test the /POST route
  */
  it('it should POST a covidTravel info and add test data', (done) => {

    //1. delete all entries before adding new
    //2. add 2 records per country and year
    //3. write more asserts in the same test. (1 positive and one negative assert per country and year) at least 4 positive asserts + 2 negative
          let covidTravelInfo = [{
              country_code: "ru",
              value: "True",
              valid_from: new Date(2021, 06, 02),
              valid_to: new Date(2022, 08, 04)
          }, 
          {
              country_code: "de",
              value: "True",
              valid_from: new Date(2021, 04, 02),
              valid_to: new Date(2022, 05, 04)
          },
          {
              country_code: "ru",
              value: "True",
              valid_from: new Date(2021, 05, 14),
              valid_to: new Date(2022, 06, 04)
          }, 
          {
              country_code: "de",
              value: "True",
              valid_from: new Date(2021, 07, 03),
              valid_to: new Date(2022, 07, 04)
          }
        ]
        covidTravelInfo.forEach(info => {
          // console.log('posting...')
          chai.request('http://localhost:3000')
          .post('/covidTravel')
          .send(info)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              expect(res.body.status).to.equal("success");
          })
        })
        done();
    })

  /*
  * Test the filtered /GET route
  */

    it('it should GET a filtered covidTravel info', (done) => {
        let travel_date = "2022-05-01T19:00:00Z"
        chai.request('http://localhost:3000')
              .get(`/covidTravel?country_code=de&travel_date=${travel_date}`)
              .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body[1]).to.deep.include({country_code: "de"});
                  expect(res.body[1].valid_from).to.equal("2021-08-02T19:00:00.000Z");
                  expect(res.body.length).to.equal(2)
            });

        chai.request('http://localhost:3000')
              .get(`/covidTravel?country_code=de&travel_date=${travel_date}`)
              .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body[0]).to.deep.include({country_code: "de"});
                  expect(res.body[0].valid_from).to.equal("2021-05-01T19:00:00.000Z");
                  expect(res.body.length).to.equal(2)
            });

        chai.request('http://localhost:3000')
              .get(`/covidTravel?country_code=ru&travel_date=${travel_date}`)
              .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body[0]).to.deep.include({country_code: "ru"});
                  expect(res.body[0].valid_from).to.equal("2021-07-01T19:00:00.000Z");
                  expect(res.body.length).to.equal(2)
            });

        chai.request('http://localhost:3000')
              .get(`/covidTravel?country_code=ru&travel_date=${travel_date}`)
              .end((err, res) => {
                  // console.log("responseBody", res)
                  res.should.have.status(200);
                  expect(res.body[1]).to.deep.include({country_code: "ru"});
                  expect(res.body[1].valid_from).to.equal("2021-06-13T19:00:00.000Z");
                  expect(res.body.length).to.equal(2)
            });
            done();
      });
})



 /*
  * Test the /GET route
  */

  // xit('it should GET all covidTravel info', (done) => {
  //     chai.request('http://localhost:3000')
  //           .get('/covidTravel')
  //           .end((err, res) => {
  //               res.should.have.status(200);
  //             expect(res.body[0]).to.deep.include({country_code: "RU"});
  //           done();
  //         });
  //   });