import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'


import Subtitle from '../shared/Subtitle';

const Home = () => {
  return <>

  
    {/* ======= Hero Section Start ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Welcome to Our Community'}/>
                <img src={worldImg} alt=" "/>

              </div>
              <h1>Travel more and create more <span className="highlight">MEMORIES</span></h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, modi sint hic nisi exercitationem, possimus corporis voluptatibus ducimus animi delectus quod sit commodi alias velit. Ducimus ex repellendus ullam veritatis.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt=" "/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} controls></video>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt=" "/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ======= Hero Section End ======= */}
    
  </>
  
};

export default Home