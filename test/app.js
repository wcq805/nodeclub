var request = require('supertest');
var app = require('../app');

describe('app.js', function () {
  it('should / status 200', function (done) {
    request(app).get('/').end(function (err, res) {
      res.should.status(200);
      done();
    });
  });

});
