import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Authentication from './pages/authentication/authentication.component';
import HomePage from './pages/homepage/homepage.component';
import NavBar from './components/nav-bar/nav-bar.component';
import ShopPage from './pages/shoppage/shoppage.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.unsubscribeFromAuth = null;

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
