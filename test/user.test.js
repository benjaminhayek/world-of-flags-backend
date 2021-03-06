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
  describe('signup', () => {
    it('should return 422 if request is missing username or password', done => {
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
          done()
      })
    })

    it('should return 422 if the email already exists', done => {
      const userRequest = {
        email: 'alex@turing.com',
        username: 'Alex',
        password: 'superSecret',
      }

      chai
        .request(app)
        .post('/signup')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(422)
          response.body.should.have.property('error')
          response.body.error.should.equal('Email Already Exists')
          done()
      })
    })

    it('should delete the user password and password_digest from the user response', done => {
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
          done()
      })
    })

    it('should return status 201 if a user successfully signs up', done => {
      const userRequest = {
        username: 'Bob',
        password: 'superSecretpassword',
        email: 'Bob5@Turing.com'
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
          done()
      })
    })
  })


  describe('signin', () => {
    it('should return 422 if request is missing username or password', done => {
      const userRequest = {
        password: 'superSecret'
      }

      chai
        .request(app)
        .post('/signin')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(422)
          response.body.should.have.property('error')
          response.body.error.should.equal('Missing required parameter')
          done()
      })
    })

    it('should return 422 if user does not exist', done => {
      const userRequest = {
        email: 'Tim@turing.com',
        password: 'superSecret'
      }

      chai
        .request(app)
        .post('/signin')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(422)
          response.body.should.have.property('error')
          response.body.error.should.equal('User Does Not Exist')
          done()
      })
    })

    it('should delete the user password_digest from the user response', done => {
      const userRequest = {
        password: 'superSecretpassword',
        email: 'Bob5@Turing.com'
      }

      chai
        .request(app)
        .post('/signin')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(201)
          response.body[0].should.have.property('id')
          response.body[0].should.have.property('email')
          response.body[0].should.have.property('token')
          response.body[0].should.not.have.property('password')
          response.body[0].should.not.have.property('password_digest')
          done()
      })
    })

    it('should return status 201 if a user successfully signs in', () => {
      const userRequest = {
        email: 'Alex@turing.com',
        password: 'secret'
      }

      chai
        .request(app)
        .post('/signin')
        .send(userRequest)
        .end((request, response) => {
          response.should.have.status(201)
          response.body[0].should.have.property('id')
          response.body[0].should.have.property('email')
          response.body[0].should.have.property('token')
      })
    })
  })
})