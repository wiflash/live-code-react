import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "unistore/react";
import {actions, store} from "../store";
import {Container, Row, Col} from 'react-bootstrap';
import MovieBody from "../components/movieBody";
import NavigationBar from "../components/navbar";


class Movie extends React.Component {
    requestMovies = async () => {
        store.setState({loadingKah: true});
        this.props.getMovies();
    }
    
    componentDidMount = () => {
        this.requestMovies();
    };
    
    render() {
        let kategori = this.props.match.params.category;
        const filteredCategory = this.props.listMovies.filter((item) => {
            if (item.Category === kategori) {
                return item;
            }
            return false;
        });
        
        const moviePost = filteredCategory.map((item, key) => {
            return (
                <MovieBody
                    key={key}
                    title={item.Title}
                    year={item.Year}
                    synopsis={item.Synopsis}
                    imgUrl={item.Poster}
                />
            );
        });

        return (
            <div>
                <NavigationBar {...this.props}/>
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Col md="1"></Col>
                            <Col md="10">
                                {this.props.loadingKah ? <div className="h5 font-weight-bold">Loading...</div> : moviePost}
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}


export default connect("listMovies, loadingKah", actions)(withRouter(Movie));