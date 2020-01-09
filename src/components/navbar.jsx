import React from 'react';
import {Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';
import logo from '../logo.svg';

class NavigationBar extends React.Component {
    handleAuth = menu => {
        if (menu === "Keluar") {
            localStorage.removeItem("loginKah");
            this.props.history.push("/");
        } else {
            this.props.history.push(`/${menu}`)
        }
    }

    render() {
        const auth = ["Profile" ,"Masuk", "Keluar"];
        const authMenu = auth.map(auth => {
            return <Nav.Link onClick={() => this.handleAuth(auth)}>{auth}</Nav.Link>;
        });

        const kategori = ["Olahraga", "Hiburan", "Bisnis"];
        const kategoriMenu = kategori.map(kategori => {
            return (
                <Nav.Link onClick={() => this.props.handleKategori(kategori)}>{kategori}</Nav.Link>
            );
        });
        
        const lainnya = ["Sains", "Teknologi", "Kesehatan"];
        const lainnyaDropdown = lainnya.map((kategoriLainnya) => {
            return (
                <NavDropdown.Item onClick={() => this.props.handleKategori(kategoriLainnya)}>
                    {kategoriLainnya}
                </NavDropdown.Item>
            );
        });
        
        return (
            <Navbar expand="lg" bg="light">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">
                        <img src={logo} width="50" height="50" className="d-inline-block align-center" alt="logo"/>
                        <span>KabarKabar</span>
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        {kategoriMenu}
                        <NavDropdown title="Lainnya">
                            {lainnyaDropdown}
                        </NavDropdown>
                    </Nav>
                    <Nav className="mx-auto">
                        <FormControl disabled={this.props.disableSearch}
                            placeholder="Ketik untuk mencari"
                            name="keyword" type="search"
                            onChange={keyword => this.props.handleSearch(keyword)}/>
                    </Nav>
                    <Nav className="mx-auto">
                        {authMenu}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default NavigationBar;