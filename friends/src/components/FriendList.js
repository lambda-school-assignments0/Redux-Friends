import React from 'react';

// import components
import Friend from './Friend';

import { ListGroup } from 'reactstrap';

const FriendList = props => {
    return (
        <ListGroup className='friend-list'>
            {props.friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />;
            })}
        </ListGroup>
    )
}

export default FriendList;