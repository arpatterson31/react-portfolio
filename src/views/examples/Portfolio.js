/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import cfjeopardy from "assets/img/audrey/cfjeopardy.png";
import background from "assets/img/audrey/art-background2.jpg";
import spaceNeedle from "assets/img/audrey/space-needle.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <img
                src={background}
                />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Changing the world, one project at a time{" "}
                        <span><i className="fa fa-heart" /></span>
                      </h1>
                      <p className="lead text-white">
                        I love that Technology is constantly changing. It allows me to keep my mind active as I continue to learn new things. If I can make a positive impact on the world through the projects I work on, then moving into this industry has been worth it.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-dark rounded-circle mb-4">
                          <i className="fa fa-file-code-o" />
                          </div>
                          <h6 className="text-dark text-uppercase">
                            Code Fellows Jeopardy
                          </h6>
                          <p className="description mt-3">
                            A fun Jeopardy style trivia game to help 100 and 200 level Code Fellow students study for their final exams.
                          </p>
                          <div>
                            <Badge color="dark" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="dark" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="dark" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="dark"
                            href="https://team-meow.github.io/CodeFellows-Jeopardy/"
                            
                          >
                            View App
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-dark rounded-circle mb-4">
                          <i className="fa fa-file-code-o" />
                          </div>
                          <h6 className="text-dark text-uppercase">
                            Gallery of Horns
                          </h6>
                          <p className="description mt-3">
                            App that allows the visitor to display images of horned animals by selecting the number of horns.
                          </p>
                          <div>
                            <Badge color="dark" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="dark" pill className="mr-1">
                              Bootstrap/CSS
                            </Badge>
                            <Badge color="dark" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="dark"
                            href="https://sleepy-wiles-960877.netlify.app/"
                            
                          >
                            View App
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-dark rounded-circle mb-4">
                          <i className="fa fa-file-code-o" />
                          </div>
                          <h6 className="text-dark text-uppercase">
                            Project for 301
                          </h6>
                          <p className="description mt-3">
                            Hold for 301 project
                          </p>
                          <div>
                            <Badge color="dark" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="dark" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="dark" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="dark"
                            href="#pablo"
                            
                          >
                            View App
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          

          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={cfjeopardy}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-dark shadow rounded-circle mb-5">
                      <i className="fa fa-file-code-o" />
                    </div>
                    <h3>Code Fellows Jeopardy</h3>
                    <p>
                     Code Fellows Jeopardy is a fun way for 100 & 200 level students to prepare for their quizzes and final exams. This quiz game covers concepts learned during the 102 and 201 classes.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="dark"
                            >
                              <i className="fa fa-code" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Five category, basic Jeopardy style trivia game. 
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="dark"
                            >
                              <i className="fa fa-code" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Great use of CSS and JavaScript to display questions on a modal window and black out the cards that have been selected.
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="dark"
                            >
                              <i className="fa fa-code" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Intuitive and easy to use.
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src="..."
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-dark shadow rounded-circle mb-5">
                      <i className="fa fa-file-code-o" />
                    </div>
                    <h3>Placeholder for 301 project</h3>
                    <p>
                     301 project placeholder text
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="dark"
                            >
                              <i className="fa fa-code" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            placeholder for 301 project 
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="dark"
                            >
                              <i className="fa fa-code" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              placeholder for 301 project
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="dark"
                            >
                              <i className="fa fa-code" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              placeholder for 301 project
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-dark shadow border-0">
                    <CardImg
                      alt="..."
                      src={spaceNeedle}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-dark"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-dark"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Audrey Patterson
                      </h4>
                      <p className="lead text-italic text-white">
                        {/* some more stuff about me */}
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-dark shadow rounded-circle mb-5">
                    <i class="fa fa-heart"></i>
                    </div>
                    <h3 class="text-dark">About Me</h3>
                    <p className="lead text-dark">
                      Software Developer based in Seattle, WA.
                    </p>
                    <p class="text-dark">
                      I am a software developer with a background in software training and implmentation. I want to make an impact on the world through the projects I work on and put out there. I am a big advocate for inclusion and diversity in the tech industry. I'm here to blaze a path for others who are like me.
                    </p>
                    <p class="text-dark">
                      Aside from being passionate about software development, in my spare time, you will find me raising my sassy 3 year old daughter, geeking out about the latest celebrity gossip, or binging on the all the cringy, reality-tv shows out there! 
                    </p>
                    <a
                      className="font-weight-bold text-dark mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Thanks for stopping by!
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
