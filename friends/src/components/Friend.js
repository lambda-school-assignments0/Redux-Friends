import React, { Component } from 'react'

import { Collapse, CardBody, Card, ListGroupItem } from 'reactstrap';

class Friend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false
        }
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <ListGroupItem className='friend-list-item'>
                <h4 onClick={this.toggle}>{this.props.friend.name}</h4>
                <Collapse isOpen={this.state.collapse}>
                    <p><strong>Age: </strong>{this.props.friend.age}</p>
                    <p><strong>Email: </strong> {this.props.friend.email}</p>
                </Collapse>
            </ListGroupItem>
        )
    }
}

export default Friend;