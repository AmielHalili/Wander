import React, {useState, useContext} from 'react'

import '../styles/login.css'

import{Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'

import registerImg from '../assets/images/register.png'

import userIcon from '../assets/images/user.png'


import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'



const Register = () => {

  const[credentials, setCredentials] = useState({
          userName: undefined,
          email: undefined,
          password: undefined,

      });

      const{dispatch} = useContext(AuthContext)
      const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
  }


  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      const result = await res.json()
      if(!res.ok)  alert(result.message)

        dispatch({type: 'REGISTER_SUCCESS'})
        navigate('/login')
    } catch (error) {

      alert(error.message  )
      
    }
  }


  
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
          <div className="login-container d-flex justify-content-between">
            <div className="login-img">
              <img src={registerImg} alt="login" />
            </div>

            <div className="login-form">
              <div className="user">
                <img src={userIcon} alt="user" />
                
              </div>
              <h2>Register</h2>

              <Form onSubmit={handleClick}>
              <FormGroup>
                  <input type="text" placeholder='Username' id='username' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' id='email' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' id='password' required onChange={handleChange} />
                </FormGroup >
                <Button className='btn secondary__btn auth__btn w-100 mt-4' type='submit'>
                  Create Account
                </Button>
              </Form>
              <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
          </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register