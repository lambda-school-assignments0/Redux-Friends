import React, { Component } from 'react';

// import redux dependencies
import { connect } from 'react-redux';

// import actions
import { getFriendsList } from '../actions';

// import components
import { FriendList } from '../components';

class FriendListView extends Component {
    render() {
        return (
            <div className='FriendList_wrapper'>
                <FriendList />
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps,
    { getFriendsList }
)(FriendListView);