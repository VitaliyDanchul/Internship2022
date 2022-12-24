const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../src/server/server');

const should = chai.should();

chai.use(chaiHttp);

describe('DEMO component', () => {
    it('get demos', (done) => {
        chai.request(server)
            .get('/v1/demo')
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('data');

                done();
            });
    });
});
