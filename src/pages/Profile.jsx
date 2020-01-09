import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {Redirect} from "react-router-dom";
import {Container, Image, Row, Col, ListGroup} from 'react-bootstrap';
import NavigationBar from "../components/navbar";


class Profile extends React.Component {
    render() {
        if (this.props.loginKah === false) {
            return <Redirect to={{ pathname: "/login" }} />;
        } else {
            return (
                <React.Fragment>
                    <NavigationBar {...this.props}/>
                    <Container fluid={true}>
                        <Container className="mt-5">
                            <Row>
                                <Col md="1"></Col>
                                <Col md="10">
                                    <ListGroup horizontal className="mb-5">
                                        <ListGroup.Item>
                                            <Image width="50%" src={this.props.avatar} alt={this.props.avatar}/>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="pr-auto">
                                            <p className="h3 font-weight-bold">Nama: {this.props.username}</p>
                                            <p>{this.props.email}</p>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </Container>
                </React.Fragment>
            );
        }
    }
};


export default connect("username, avatar, email, loginKah",actions)(withRouter(Profile));