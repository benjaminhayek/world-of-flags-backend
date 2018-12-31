process.env.NODE_ENV = 'test'

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const user = require('../user');
const expect = chai.expect;
const should = chai.should();
const config = require('../knexfile')['test'];
const database = require('knex')(config);

chai.use(chaiHttp)

describe('User Middleware', () => {

  // beforeEach(() =>
  //   database.migrate
  //     .rollback()
  //     .then(() => database.migrate.latest())
  //     .then(() => database.seed.run()));

  describe('signup', () => {
    it('should return 422 if request is missing username or password', () => {
      const userRequest = {
        password: 'superSecret'
      }

      chai
        .request(app)
        .post('/signup')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(422)
          response.body.should.have.property('error')
          response.body.error.should.equal('Missing required parameter')
        })
    })

    it('should return status 201 if a user successfully signs up', done => {
      const userRequest = {
        username: 'Bob',
        password: 'superSecretpassword',
        email: 'Bob2@Turing.com'
      }

      chai
        .request(app)
        .post('/signup')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(201)
          response.body.user[0].should.have.property('id')
          response.body.user[0].should.have.property('username')
          response.body.user[0].should.have.property('token')
          // response.body.user[0].id.should.equal(2)
          done()
        })
    })

    it('should delete the user password and password_digest from the user response', () => {
      const userRequest = {
        username: 'Bob',
        password: 'superSecretpassword',
        email: 'Bob2@Turing.com'
      }

      chai
        .request(app)
        .post('/signup')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(201)
          response.body.user[0].should.have.property('id')
          response.body.user[0].should.have.property('username')
          response.body.user[0].should.have.property('token')
          response.body.user[0].should.not.have.property('password')
          response.body.user[0].should.not.have.property('password_digest')
          response.body.user[0].id.should.equal(2)
          done()
        })
    })
  })


  describe('signin', () => {
    it('should return 422 if request is missing username or password', () => {
      const userRequest = {
        password: 'superSecret'
      }

      chai
        .request(app)
        .post('/signin')
        .send(userRequest)
        .end((request, response) => {
          // console.log(response)
          response.should.have.status(422)
          response.body.should.have.property('error')
          response.body.error.should.equal('Missing required parameter')
      })
    })

    it('should return status 201 if a user successfully signs up', () => {
      const userRequest = {
        username: 'Alex@turing.com',
        password: 'secret'
      }

      chai
        .request(app)
        .post('/signin')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(201)
          response.body.user[0].should.have.property('id')
          response.body.user[0].should.have.property('username')
          response.body.user[0].should.have.property('token')
          response.body.user[0].id.should.equal(2)
          done()
        })
    })

    it('should delete the user password_digest from the user response', () => {
      const userRequest = {
        username: 'Bob2@Turing.com',
        password: 'superSecretpassword'
      }

      chai
        .request(app)
        .post('/signin')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(201)
          response.body.user[0].should.have.property('id')
          response.body.user[0].should.have.property('username')
          response.body.user[0].should.have.property('token')
          response.body.user[0].should.not.have.property('password')
          response.body.user[0].should.not.have.property('password_digest')
          response.body.user[0].id.should.equal(2)
          done()
        })
    })
  })

  describe('checkPassword', () => {
    it('should return a promise', () => {
      const mockPassword = 'password'
      const mockUser = [{
        id: 1,
        username: "Alex",
        password: "password",
        email: "Alex@turing.com",
        password_digest: 'aaaaa',
        token: 'bbbbb',
      }]

      let result = user.checkPassword(mockPassword, mockUser)

      expect(result).to.be.a('promise');
    })
  })

  describe('createToken', () => {
    it('should return a promise', () => {
      let result = user.createToken()

      expect(result).to.be.a('promise');
    })
  })

  describe('encryptPassword', () => {
    it('should return a promise', () => {
      const mockPassword = 'Password'
      let result = user.encryptPassword(mockPassword)
      
      expect(result).to.be.a('promise');
    })
  })
})


