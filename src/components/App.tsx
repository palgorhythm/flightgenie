import React from 'react';

import Form from './Form';
import Login from './Login';
import Search from './Search';
import Trips from './Trips';
import { Main, Nav, Footer } from '../utils';
import SignUp from './signup';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App: React.FC = (props: any): JSX.Element => {
  return (
    <Router>
      <div id="App" style={{ height: '100vh' }}>
        <Main>
          <Route exact path="/trips" component={Trips} />
          <Route exact path="/" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Footer />
        </Main>
      </div>
    </Router>
  );
};
export default App;
