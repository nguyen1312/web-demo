import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { Link } from 'react-scroll';
import { Button } from 'reactstrap'

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {
            projects.map((project) => {
              if (projects.indexOf(project) == 0)
              {
                const { title, info, info2, url, repo, img, id } = project;
                return (
                <Row key={id}>
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="10px"
                    >
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {'We propose the task of free-form and open-ended Visual Question Answering (VQA).'}
                          </p>
                          <p>
                            {'Given an image and a natural language question about the image, the task is to provide an accurate natural language answer. '}
                          </p>
                        </div>
                        <Button>
                          <Link to="demo" smooth duration={1000}>
                            {'See Live'}
                          </Link>
                        </Button>
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="10px"
                    >
                      <div className="project-wrapper__image">
                        <a
                          href={url || '#demo'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </Row>
            );
              } else
              {
                return
              }
            }
            )
          }
        </div>
      </Container>
    </section>
  );
            
};

export default Projects;
