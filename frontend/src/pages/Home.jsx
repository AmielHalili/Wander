import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'


import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';

import ServiceList from '../services/ServiceList';

import FeaturedTourList from '../components/Featured-Tours/FeaturedTourList';


import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';

import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

import GoogleMapView from '../components/GoogleMapView';

const Home = () => {
  return <>


    {/* ======= Hero Section Start ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <img src={worldImg} alt=" " />
                <Subtitle subtitle={'Join Our Wander Community'} />

              </div>
              <h1>More <span className="highlight">Wandering</span><br></br>More <span className="highlight">Traveling</span><br></br>More <span className="highlight">MEMORIES</span></h1>
              <p>
                Smart itineraries. Simple booking. Limitless adventure. <br />
                Join a community of explorers on curated adventures worldwide.
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt=" " />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} controls></video>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt=" " />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    {/* ======= Hero Section End ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services-subtitle'>What we serve</h5>
            <h2 className='services-title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* ======= other featured tours start ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className="featured-tour-title">Trending Tours and Wanders</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>


    {/* ======= other featured tours end ======= */}

    {/* ======= Experience start ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='experience-content'>
              <Subtitle subtitle={'Experience'} />
              <h2>
                With our all experience <br /> we will serve you
              </h2>
              <p>
                Let our experience elevate your adventure. <br /> With countless tour options to explore, we are here to craft a seamless and unforgettable journey just for you.
              </p>
            </div>

            <div className="counter-wrapper d-flex align-items-center gap-5">
              <div className="counter-box">
                <span>10k+</span>
                <h6>Sucessful Wanders</h6>
              </div>
              <div className="counter-box">
                <span>1k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter-box">
                <span>2</span>
                <h6>Years of Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className='experience-img-box'>
              <img src={experienceImg} alt=" " />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ======= Experience end ======= */}
    <section>
      <div>
                  <h1 className="google-title">Wander the World!</h1>
                  <GoogleMapView />
              </div>
    </section>

    {/* ======= gallery start ======= */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}></Subtitle>
            <h2 className="gallery-title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>

    {/* ======= gallery end ======= */}
    {/* ======= testimonial start ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testimonial-title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ======= testimonial end ======= */}
    <Newsletter />


  </>

};

export default Home