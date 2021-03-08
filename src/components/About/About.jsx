import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Introduction" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Historically, building a system that can answer natural language questions about any image has been considered a very ambitious goal.'
                  }
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Imagine a system that, look at the picture to your left, could answer these questions:'}
                </p>
                <p className="about-wrapper__info-text">
                  <ul>
                        <li> What is in the image? </li>
                        <li> Are there any humans? </li>
                        <li> What sport is being played? </li>
                        <li> Who has the ball? </li>
                        <li> How many players are in the image? </li>
                        <li> Who are the teams? </li>
                        <li> Is it raining? </li>
                  </ul>
                </p>
                <p className="about-wrapper__info-text">
                With the advent of Deep Learning (DL), we have witnessed enormous research progress in Visual Question Answering (VQA), in such a way that systems capable of answering these questions are emerging with promising results.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
