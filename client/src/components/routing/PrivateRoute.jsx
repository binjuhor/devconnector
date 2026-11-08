import React from 'react';
import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({children, auth: {isAuthenticated, loading}}) => {
    if (loading) return <Spinner/>;
    if (!isAuthenticated) return <Navigate to='/login' replace/>;
    return children;
};

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
