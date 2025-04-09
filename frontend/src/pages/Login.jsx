import React, {useState} from 'react'

import '../styles/login.css'

import{Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

import loginImg from '../assets/images/login.png'

import userIcon from '../assets/images/user.png'



const Login = () => {

  const[credentials, setCredentials] = useState({
          email: undefined,
          password: undefined,

      })

  const handleChange = (e) => {
    setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
  }


  const handleClick = (e) => {
    e.preventDefault();
  }


  
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
          <div className="login-container d-flex justify-content-between">
            <div className="login-img">
              <img src={loginImg} alt="login" />
            </div>

            <div className="login-form">
              <div className="user">
                <img src={userIcon} alt="user" />
                
              </div>
              <h2>Login</h2>

              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="email" placeholder='Email' id='email' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' id='password' required onChange={handleChange} />
                </FormGroup >
                <Button className='btn secondary__btn auth__btn w-100 mt-4' type='submit'>
                  Login
                </Button>
              </Form>
              <p>Don't have an account? <Link to='/register'>Create an account</Link></p>
            </div>
          </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login