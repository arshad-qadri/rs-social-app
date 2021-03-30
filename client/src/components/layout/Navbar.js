import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import '../../css/navbar.css';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ml-auto '>
      <li className='nav-item font-weight-bold active px-3'>
        <NavLink
          activeClassName='myActive'
          exact
          className='nav-link'
          to='/posts'
        >
          <i className='fa fa-file-text-o'></i>
          Posts
        </NavLink>
      </li>

      <li className='nav-item font-weight-bold active px-3'>
        <NavLink
          activeClassName='myActive'
          exact
          className='nav-link'
          to='/dashboard'
        >
          Dashboard
        </NavLink>
      </li>

      <li className='nav-item font-weight-bold active px-3'>
        <NavLink className='btn btn-outline-danger' onClick={logout} to='/'>
          <i className='fa fa-sign-out'></i>
          Signout
        </NavLink>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item font-weight-bold active px-3'>
        <NavLink activeClassName='myActive' exact className='nav-link' to='/'>
          <i className='fa fa-home'></i>
          Home
        </NavLink>
      </li>

      <li className='nav-item font-weight-bold active px-3'>
        <NavLink
          activeClassName='myActive'
          exact
          className='nav-link'
          to='/register'
        >
          <i className='fa fa-user-plus'></i>Register
        </NavLink>
      </li>

      <li className='nav-item font-weight-bold active px-3'>
        <NavLink
          activeClassName='myActive'
          exact
          className='nav-link'
          to='/login'
        >
          <i className='fa fa-sign-in'></i>Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light fixed-top mb-3'>
      <NavLink className='navbar-brand font-weight-bold' to='/'>
        <i className='fa fa-flag logo'></i>
        <span className='logo'>RS</span>
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapSateToProps = state => ({
  auth: state.auth,
});

export default connect(mapSateToProps, { logout })(Navbar);
