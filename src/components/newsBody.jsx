import React from 'react';
import {ListGroup, Image} from 'react-bootstrap';
// import {MdShare} from "react-icons/md";
// import {AiFillLike, AiFillDislike} from "react-icons/ai";

class NewsBody extends React.Component {
    render() {
        return (
            <ListGroup className="mb-4">
                <ListGroup.Item className="p-0">
                    <Image alt="image news" src={this.props.img} fluid className="rounded-top mx-auto d-block"/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="h4 font-weight-bold">
                        <a href={this.props.url} className="text-body">
                            {this.props.title}
                        </a>
                    </p>
                    <p>{this.props.content}</p>
                    <p className="text-black-50 mb-1">Last updated 3 minutes ago</p>
                </ListGroup.Item>
                <ListGroup.Item className="p-0">
                    <ListGroup horizontal className="text-center">
                        <ListGroup.Item action variant="secondary" className="border-0">
                            {/* <AiFillLike/> */}
                        </ListGroup.Item>
                        <ListGroup.Item action variant="secondary" className="border-0">
                            {/* <MdShare/> */}
                        </ListGroup.Item>
                        <ListGroup.Item action variant="secondary" className="border-0">
                            {/* <AiFillDislike/> */}
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}


export default NewsBody;