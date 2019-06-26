import React, { Component } from 'react';

// import redux dependencies
import { connect } from 'react-redux';

// import actions
import { getFriendsList } from '../actions';

// import components
import { FriendList } from '../components';

class FriendListView extends Component {
    componentDidMount() {
        this.props.getFriendsList();
    }
    render() {
        return (
            <div className='FriendList_wrapper'>
                <FriendList friends={this.props.friends}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    loggingIn: state.friendsReducer.loggingIn,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    savingFriends: state.friendsReducer.savingFriends,
    updatingFriends: state.friendsReducer.updatingFriends,
    deletingFriends: state.friendsReducer.deletingFriends,
    error: state.friendsReducer.error
});

export default connect(
    mapStateToProps,
    { getFriendsList }
)(FriendListView);