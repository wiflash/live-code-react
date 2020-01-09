import React from "react";
// import axios from "axios";
import {withRouter} from "react-router-dom";
import {connect} from "unistore/react";
import {actions, store} from "../store";
import {Container, Row, Col} from 'react-bootstrap';
import NewsBody from "../components/newsBody";
import NavigationBar from "../components/navbar";
import ShowSideBarBody from "../components/showSideBar";


class Home extends React.Component {
    requestNews = async () => {
        let kategori = this.props.match.params.kategori;
        if (kategori === undefined) {kategori="general"}
        store.setState({loadingKah: true});
        this.props.getNews(kategori);
    }

    componentDidMount = () => {
        this.requestNews();
    };

    handleRouterKategori = async namaKategori => {
        let kategori;
        namaKategori === "Olahraga" ? kategori="sports"
            : namaKategori === "Hiburan" ? kategori="entertainment"
            : namaKategori === "Bisnis" ? kategori="business"
            : namaKategori === "Sains" ? kategori="science"
            : namaKategori === "Teknologi" ? kategori="technology"
            : kategori="health"
        await this.props.history.replace("/" + kategori);
        this.requestNews();
    };

    handleRouterSearch = keywordObject => {
        store.setState({ [keywordObject.target.name]: keywordObject.target.value });
        this.requestNews();
    };

    render() {
        const validHeadlines = this.props.listNews.filter((item) => {
            if (item.content !== null && item.image !== null) {
                return item;
            }
            return false;
        });
        
        const headlineNews = validHeadlines.map((item, key) => {
            return (
                <NewsBody
                    key={key}
                    title={item.title}
                    img={item.urlToImage}
                    content={item.description}
                    url={item.url}
                />
            );
        });

        return (
            <div>
                <NavigationBar {...this.props}
                    handleKategori={event => this.handleRouterKategori(event)}
                    handleSearch={event => this.handleRouterSearch(event)}
                    disableSearch={false}/>
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Col md="4" className="ml-auto"><ShowSideBarBody /></Col>
                            <Col md="7" className="mr-auto">
                                {this.props.loadingKah ? <div className="h5 font-weight-bold">Loading...</div> : headlineNews}
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}


export default connect("keyword, listNews, loadingKah", actions)(withRouter(Home));