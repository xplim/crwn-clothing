import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './nav-bar.styles.scss';

const NavBar = ({ currentUser }) => (
  <div className="nav-bar">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign in
        </Link>
      )}
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(NavBar);
