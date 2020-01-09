import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {Container, Row, Form, Button} from 'react-bootstrap';
import NavigationBar from "../components/navbar";


class Masuk extends React.Component {
    handleRouterKategori = async namaKategori => {
        let kategori;
        namaKategori === "Olahraga" ? kategori="sports"
            : namaKategori === "Hiburan" ? kategori="entertainment"
            : namaKategori === "Bisnis" ? kategori="business"
            : namaKategori === "Sains" ? kategori="science"
            : namaKategori === "Teknologi" ? kategori="technology"
            : kategori="health"
        await this.props.history.push("/" + kategori);
    };

    login = () => {
        const data = {
            username: this.props.username,
            password: this.props.password
        }
        axios.post("https://login-uhuy.free.beeceptor.com/login", data)
        .then((response) => {
            if (response.data.hasOwnProperty("apiKey")) {
                localStorage.setItem("apiKey", response.data.apiKey);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("fullname", response.data.fullname);
                localStorage.setItem("loginKah", true);
                this.props.history.push("/profile");
            }
        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar {...this.props}
                    handleKategori={event => this.handleRouterKategori(event)}
                    disableSearch={true}/>
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Form className="mx-auto" onSubmit={event => event.preventDefault()}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Masukan username"
                                        name="username" onChange={(event) => this.props.handleSetGlobal(event)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Masukan password"
                                        name="password" onChange={(event) => this.props.handleSetGlobal(event)}/>
                                </Form.Group>
                                <Button variant="outline-info" type="submit" onClick={() => this.login()}>
                                    Masuk
                                </Button>
                            </Form>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}


export default connect("username, password, keyword", actions)(withRouter(Masuk));