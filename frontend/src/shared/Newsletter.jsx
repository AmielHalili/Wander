import React, { useState } from 'react';
import '../shared/newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            alert(`Confirmation email sent to ${email}`);
            console.log(`Confirmation email sent to ${email}`);
            setEmail(''); // Clear the input field
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="newsletter-content">
                            <h2>Subscribe now to get useful traveling information</h2>

                            <div className="newsletter-input">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className="btn newsletter-btn" onClick={handleSubscribe}>
                                    Subscribe
                                </button>
                            </div>

                            <p>No spam. Just good travel inspo and planning help when you need it.</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="newsletter-img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;