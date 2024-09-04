import React from 'react';
import '../styles/AboutUs.css';
import about1 from "../assets/ABOUT/a4.jpg"
import about2 from "../assets/ABOUT/a5.jpg"
import about3 from "../assets/ABOUT/a1.jpg"
import hi from "../assets/ABOUT/cakes1.jpg"
import fl from "../assets/ABOUT/flower.jpg"
import cho from "../assets/ABOUT/chocolate.jpg"
import gh from "../assets/ABOUT/gh.jpg"

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1><center>About Your Gift Shop</center></h1>
            <div className="about-content">
                <p>Welcome to Your Gift Shop, where we believe that every gift is an opportunity to create lasting memories. Founded in [Year], our mission is to bring joy and connection through the art of thoughtful gifting.</p>
                <div className="carousel">
                    <img src={about1} alt="1" />
                    <img src={about2} alt="2" />
                    <img src={about3} alt="3" />
                </div>
                <section className="offers-section">
                    <h2><center>Our Story</center></h2>
                    <p>Your Gift Shop started with a simple idea: to make finding the perfect gift an enjoyable experience. We understand the importance of giving a gift that reflects love, appreciation, and care. With our curated selection of unique, high-quality products, we strive to make every occasion special.</p>
                </section>
                <h2>Explore Our Collections</h2>

                <div className="cta-section">
                    <div className="cta-image">
                        <div className="cta-image-front">
                            <img src={hi} alt="Cakes" />
                        </div>
                        <div className="cta-image-back">
                            <h3>Cakes</h3>
                            <p>Delicious cakes for every occasion.</p>
                        </div>
                    </div>
                </div>
              
                <div className="cta-section">
                    <div className="cta-image">
                        <div className="cta-image-front">
                            <img src={fl} alt="Flowers" />
                        </div>
                        <div className="cta-image-back">
                            <h3>Flowers</h3>
                            <p>Beautiful flowers to brighten up your day.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <div className="cta-image">
                        <div className="cta-image-front">
                            <img src={cho} alt="Chocolate" />
                        </div>
                        <div className="cta-image-back">
                            <h3>Chocolate</h3>
                            <p>Exquisite chocolates for the sweet tooth.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <div className="cta-image">
                        <div className="cta-image-front">
                            <img src={gh} alt="Gift Hampers" />
                        </div>
                        <div className="cta-image-back">
                            <h3>Gift Hampers</h3>
                            <p>Carefully curated gift hampers for all occasions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
