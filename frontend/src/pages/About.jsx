import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import '../styles/about.css'
import gallery1 from '../assets/images/gallery-01.jpg'
import gallery2 from '../assets/images/gallery-02.jpg'
import gallery3 from '../assets/images/gallery-03.jpg'
import heroimg from '../assets/images/hero-img02.jpg'
import experienceImg from '../assets/images/experience.png'
import GoogleMapView from '../components/GoogleMapView';

const About = () => {
    return (<>
        <section className="about-section">
            <Container className="about-hero-section mt-5">
                <h2> Smart itineraries. Simple booking. Limitless adventure. </h2>
                <Row className="position-relative">
                    <Col lg="12">
                        <img src={heroimg} alt="About Wander" className="about-hero-image" />
                        <div className="about-floating-box">
                            <Subtitle subtitle={'About Wander'} />
                            <p>
                                Wander is your go-to platform for discovering and booking curated travel experiences.
                                With our thoughtfully crafted itineraries and expert recommendations, we make it easy to
                                explore new destinations with confidence and excitement.
                            </p>
                            <p>
                                Whether you're chasing city vibes, nature escapes, or cultural gems, we're here to guide your every step.
                                Join thousands of happy travelers who trust Wander to turn their journeys into unforgettable stories.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="values-container">
                <Row>
                    <Col lg="6" className="experience-img-wrapper">
                        <img src={experienceImg} alt="Experience" className="experience-side-img" />
                    </Col>
                    <Col lg='6' className="values-section">
                        <Subtitle subtitle={'Our Values'} />
                        <p>
                            At Wander, our values are the foundation of every journey we create. We believe in:
                        </p>
                        <ul className="values-list">
                            <li><strong>Authenticity</strong> – We celebrate real experiences, local culture, and meaningful travel moments.</li>
                            <li><strong>Accessibility</strong> – Travel should be easy and inclusive for everyone, no matter the destination.</li>
                            <li><strong>Trust</strong> – We prioritize safety, transparency, and reliability at every step.</li>
                            <li><strong>Inspiration</strong> – Our curated itineraries aim to spark curiosity and deepen your love for exploration.</li>
                            <li><strong>Community</strong> – From solo travelers to groups, we’re building a connected world through shared adventures.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="about-gallery mt-5">
                <Row>
                    <Col lg="4" md="6" sm="12">
                        <img src={gallery1} alt="Gallery 1" className="about-gallery-img" />
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <img src={gallery2} alt="Gallery 2" className="about-gallery-img" />
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <img src={gallery3} alt="Gallery 3" className="about-gallery-img" />
                    </Col>
                </Row>
            </Container>
        </section>
        <GoogleMapView />
        </>
    );
};

export default About;
