import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "unistore/react";
import {actions, store} from "../store";
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../logo.svg';

class NavigationBar extends React.Component {
    handleAuth = menu => {
        if (menu === "Logout") {
            // localStorage.removeItem("loginKah");
            store.setState({loginKah: false});
            this.props.history.push("/");
        } else if (menu === "Home") {
            this.props.history.push("/");
        } else {
            this.props.history.push(`/${menu}`)
        }
    }

    render() {
        const auth = ["Home" ,"Profile", "Login", "Logout"];
        const authMenu = auth.map(auth => {
            return <Nav.Link onClick={() => this.handleAuth(auth)}>{auth}</Nav.Link>;
        });
        
        return (
            <Navbar expand="lg" bg="light">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">
                        <img src={logo} width="50" height="50" className="d-inline-block align-center" alt="logo"/>
                        <span>Movie</span>
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        {authMenu}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default connect("loadingKah", actions)(withRouter(NavigationBar));
// export default NavigationBar;