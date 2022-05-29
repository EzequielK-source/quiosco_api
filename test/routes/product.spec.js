//Test deps and sets
const chai = require('chai'),
    chaiHttp = require('chai-http')
chai.use(chaiHttp);

const {
    expect,
    assert,
    request
} = chai;
//Api domain imports
const app = require('src/app')
describe('Products route test', () => {
	it('post', (done) => {
		request(app)
			.post('/products')
			.end((err,res)=>{
				if(err) done(err);
				expect(res).to.have.status(201)
				expect(res.body).to.be.deep.equal({
					status: 'product created'
				})
				done();
			})
	});
    it('get', (done) => {
        request(app)
            .get('/products')
            .end((err, res) => {
                if (err) done(err)
                expect(res).to.have.status(200);
                done()
            })
    });
});
