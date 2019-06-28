import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import components
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

// import views
import { FriendListView } from './views';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='Friends_Navbar'>
          <ul>
            <li>
              <Link to='/protected'>Friends</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendListView} />
      </div>
    </Router>
  );
}

export default App;
