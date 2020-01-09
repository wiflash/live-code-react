import React from 'react';
import {ListGroup, Image} from 'react-bootstrap';

class MovieBody extends React.Component {
    render() {
        return (
            <ListGroup horizontal className="mb-5">
                <ListGroup.Item variant="secondary">
                    <Image fluid src={this.props.imgUrl} alt={this.props.title}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="h3 font-weight-bold">{this.props.title}</p>
                    <p>{this.props.year}</p>
                    <p>{this.props.synopsis}</p>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}


export default MovieBody;