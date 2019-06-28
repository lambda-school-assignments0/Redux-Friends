import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

// import components
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

// import views
import { FriendListView } from './views';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar color='light'>
          <NavbarBrand>
            <Link to='/protected'>Friends</Link>
          </NavbarBrand>
          <Nav>
            <NavItem>
              <Link to='/login'>Login</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendListView} />
      </div>
    </Router>
  );
}

export default App;
