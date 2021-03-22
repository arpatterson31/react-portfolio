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
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";
import cfjeopardy from "assets/img/audrey/cfjeopardy.png";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
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
                        write what excites me in tech for lab.
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
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
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
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Audrey Patterson
                      </h4>
                      <p className="lead text-italic text-white">
                        some more stuff about me
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-default shadow rounded-circle mb-5">
                    <i class="fa fa-heart"></i>
                    </div>
                    <h3>About Me</h3>
                    <p className="lead">
                      Software Developer based in Seattle, WA.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-default mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
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
