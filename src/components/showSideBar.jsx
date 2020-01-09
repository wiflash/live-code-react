import React from "react";
import {withRouter, Link} from "react-router-dom";
import {connect} from "unistore/react";
import {actions, store} from "../store";
import {ListGroup, Row, Col} from 'react-bootstrap';
import SideBarBody from "./sideBarBody";


class ShowSideBarBody extends React.Component {
    componentDidMount = () => {
        store.setState({sideLoadingKah: true});
        this.props.getSideNews();
    };

    render() {
        const validHeadlines = this.props.sideListNews.filter((item) => {
            if (item.content !== null && item.image !== null) {
                return item;
            }
            return false;
        });
        
        const headlineNews = validHeadlines.map((item, key) => {
            return (
                <SideBarBody
                rank={key+1}
                title={item.title}
                url={item.url}
                />
            );
        });
        
        return (
            <ListGroup className="mb-4">
                <ListGroup.Item>
                    <Row className="align-items-center">
                        <Col md="6">
                            <span className="text-primary font-weight-bold">BERITA TERKINI</span>
                        </Col>
                        <Col md="6" className="text-right">
                            <Link to="/">lihat semua</Link>
                        </Col>
                    </Row>
                </ListGroup.Item>
                {this.props.sideLoadingKah ? <ListGroup.Item>Loading...</ListGroup.Item> : headlineNews}
            </ListGroup>
        );
    }
}


export default connect("keyword, sideListNews, sideLoadingKah", actions)(withRouter(ShowSideBarBody));