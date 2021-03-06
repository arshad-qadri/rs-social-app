import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Maintenance from './maintenance.svg';
import '../../css/dashboard.css';

const Dashboard = auth => {
  return (
    <div className='dashboard text-center'>
      <h1 className='mb-4'>Dashboard</h1>
      <img
        className='m-5 img-fluid'
        width='300px'
        src={Maintenance}
        alt='dashboard_img'
      />
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
