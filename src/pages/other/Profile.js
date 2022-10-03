import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
// import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import MainWrapper from "../../components/wrapper/MainWrapper";

const Profile = ({ location }) => {
  const { pathname } = location;

  return (
    <MainWrapper
      title={"Flone | Profile"}
      content={"Compare page of flone react minimalist eCommerce template."}
      authenticated
    >
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Profile
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <>
          <Container fluid>
            <Row className="justify-content-center py-5">
              <Col md="8">
                <Card>
                  <Card.Header>
                    <Card.Title as="h4">Edit Profile</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>First Name</label>
                            <Form.Control
                              defaultValue="Sahil"
                              placeholder="First Name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Last Name</label>
                            <Form.Control
                              defaultValue="Khanna"
                              placeholder="Last Name"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label>Username</label>
                            <Form.Control
                              defaultValue="lapaas123"
                              placeholder="lapaas123"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>Email</label>
                            <Form.Control
                              defaultValue="lapaas@gmail.com"
                              placeholder="lapaas@gmail.com"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="4">
                          <Form.Group>
                            <label>City</label>
                            <Form.Control
                              defaultValue="Delhi"
                              placeholder="City"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="px-1" md="4">
                          <Form.Group>
                            <label>Country</label>
                            <Form.Control
                              defaultValue="India"
                              placeholder="Country"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="4">
                          <Form.Group>
                            <label>Postal Code</label>
                            <Form.Control
                              placeholder="ZIP Code"
                              type="number"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <Form.Group>
                            <label>Address</label>
                            <Form.Control
                              cols="80"
                              defaultValue="455, Ground Floor, Bawana Rd, near Delhi Technical University,
                            Shahbad Daulatpur Village, New Delhi, Delhi 110042"
                              placeholder="Address"
                              rows="4"
                              as="textarea"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                      >
                        Update Profile
                      </Button>
                      <div className="clearfix"></div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      </LayoutOne>
    </MainWrapper>
  );
};

Profile.propTypes = {
  location: PropTypes.object,
};

export default Profile;
