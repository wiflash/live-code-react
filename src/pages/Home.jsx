import React from "react";
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import Romance from "../images/Romance.jpg"
import Action from "../images/Action.jpg"
import Fiction from "../images/Fiction.jpg"
import Comedy from "../images/Comedy.jpg"
import NavigationBar from "../components/navbar";


class Home extends React.Component {
    handleKategori = async namaKategori => {
        let kategori;
        namaKategori === "Romance" ? kategori="romance"
            : namaKategori === "Action" ? kategori="action"
            : namaKategori === "Fiction" ? kategori="fiction"
            : kategori="comedy"
        await this.props.history.push("/" + kategori);
    };

    render() {
        const category = ["Romance" ,"Action", "Fiction", "Comedy"];
        const movieCategory = category.map(category => {
            return (
                <Col md="3" className="text-center mb-5">
                    <Row>
                        <Col md="12">
                            <h3>{category}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Image fluid src={
                                    category === "Romance" ? Romance
                                    : category === "Action" ? Action
                                    : category === "Fiction" ? Fiction
                                    : Comedy
                                } className="align-center" alt={category}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Button onClick={() => this.handleKategori(category)} className="mt-3" variant="primary">See Movies</Button>
                        </Col>
                    </Row>
                </Col>
            )
        });

        return (
            <React.Fragment>
                <NavigationBar {...this.props}/>
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row className>
                            {movieCategory}
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}


export default Home;