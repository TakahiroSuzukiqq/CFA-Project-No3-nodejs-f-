// //#testing whether test is working
// var expect = require('chai').expect;
//
// describe('simple test', function() {
//   it ('always true', function() {
//          expect(true).to.be.true;
//   });
// });
//##########################################
//#testing api
//process.env.MONGODB_URI='mongodb://icn:111111@ds157621.mlab.com:57621/cfa-project3-icn-testing'
//
// var expect = require('chai').expect;
// const request = require('supertest');
// var app = require('../app');
// app.listen(3001);
//
//
// describe('simple test', function() {
//   it ('always true', function() {
//          expect(true).to.be.true;
//   });
// });
//
// describe('api test', function() {
//   it ('check /api/questionnaire', function(done) {
//     request(app)
//      .get('/user')
//      //.set('Accept', 'application/json')
//      .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2NzIzNjI3fQ.nNGFQFVpa54Nlr8ziF8SXo0VVMbcAfzMPsuPokWLQVk')
//      .expect('Content-Type', /json/)
//      .expect(200)
//      .end(function(err, res) {
//           console.log("Reached end", res.body)
//         done();
//       });
//    });
//
//    it ('add /api/questionnaire', function(done) {
//      request(app)
//       .post('/api/questionnaire')
//       //.set('Accept', 'application/json')
//       .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2NzIzNjI3fQ.nNGFQFVpa54Nlr8ziF8SXo0VVMbcAfzMPsuPokWLQVk')
//       .query({name: "testingQuestion"})
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//            console.log("Reached end", res.body)
//          done();
//        });
//     });
//
//     it ('add /api/questionnaire', function(done) {
//       request(app)
//        .post('/api/questionnaire')
//        //.set('Accept', 'application/json')
//        .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2NzIzNjI3fQ.nNGFQFVpa54Nlr8ziF8SXo0VVMbcAfzMPsuPokWLQVk')
//        .query({name: "testingQuestion"})
//        .expect('Content-Type', /json/)
//        .expect(200)
//        .expect(function(res) {
//           expect(res.body).to.have.lengthOf(1);
//        })
//        .end(function(err, res) {
//             console.log("Reached end", res.body)
//           done();
//         });
//      });
//
//  });
//##########################################
// process.env.MONGODB_URI='mongodb://icn:111111@ds157621.mlab.com:57621/cfa-project3-icn-testing'
//
// var expect = require('chai').expect;
// const request = require('supertest');
// var app = require('../app');
// app.listen(3005);
//
//
// describe('simple test', function() {
//   it ('always true', function() {
//          expect(true).to.be.true;
//   });
// });
//
// //#talk to mongo db directly
//
// describe('db test', function() {
//  before(function(done) {
//   mongoose.connect(process.env.MONGODB_URI,function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase(function(done) {
//      done();
//    )
//  }         //#CHeck again!!!!!!!!
//   });
// });
// })
//
// describe('api test', function() {
//   it ('check /api/questionnaire', function(done) {
//     request(app)
//      .get('/user')
//      //.set('Accept', 'application/json')
//      .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2NzIzNjI3fQ.nNGFQFVpa54Nlr8ziF8SXo0VVMbcAfzMPsuPokWLQVk')
//      .expect('Content-Type', /json/)
//      .expect(200)
//      .end(function(err, res) {
//           console.log("Reached end", res.body)
//         done();
//       });
//    });
//
//    it ('add /api/questionnaire', function(done) {
//      request(app)
//       .post('/api/questionnaire')
//       //.set('Accept', 'application/json')
//       .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2NzIzNjI3fQ.nNGFQFVpa54Nlr8ziF8SXo0VVMbcAfzMPsuPokWLQVk')
//       .query({name: "testingQuestion"})
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//            console.log("Reached end", res.body)
//          done();
//        });
//     });
//
//     it ('check /api/questionnaire', function(done) {
//       request(app)
//        .post('/api/questionnaire')
//        //.set('Accept', 'application/json')
//        .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk2NzIzNjI3fQ.nNGFQFVpa54Nlr8ziF8SXo0VVMbcAfzMPsuPokWLQVk')
//        .query({name: "testingQuestion"})
//        .expect('Content-Type', /json/)
//        .expect(200)
//        .expect(function(res) {
//           expect(res.body).to.have.lengthOf(1);
//        })
//        .end(function(err, res) {
//             console.log("Reached end", res.body)
//           done();
//         });
//      });
//
//  });
