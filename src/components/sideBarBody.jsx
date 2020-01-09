import React from 'react';
import {ListGroup, Badge} from 'react-bootstrap';

class SideBarBody extends React.Component {
    render() {
        return (
            <ListGroup.Item>
                <Badge pill variant="danger">#{this.props.rank}</Badge><br/>
                <a href={this.props.url}>{this.props.title}</a>
            </ListGroup.Item>
        );
    }
}


export default SideBarBody;