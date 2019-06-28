import React from 'react';

// import components
import Friend from './Friend';

const FriendList = props => {
    return (
        <div className='friend-list'>
            {props.friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />;
            })}
        </div>
    )
}

export default FriendList;