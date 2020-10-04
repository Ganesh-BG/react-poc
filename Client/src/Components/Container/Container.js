import React, { Component } from 'react';
import Login from '../Login/Login';
import RoutingContainer from '../RoutingContainer/RoutingContainer';
import { connect } from 'react-redux';
import { fetchLogin } from '../../actions/authActions';
import PropTypes from 'prop-types';

class Container extends Component {
  state = {
    userid: '',
    password: '',
    isInvalid: true,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    if (value !== '') {
      this.setState({
        [name]: value,
      });
    }
  };

  handleLogin = (e) => {
    e.preventDefault();
    if (window.localStorage && !localStorage.getItem('userIsAuthenticated')) {
      this.props.fetchLogin(this.state.userid, this.state.password);
      if (this.props.login.isAuthenticated) {
        localStorage.setItem('userIsAuthenticated', this.props.login.isAuthenticated);
      }
    }
  };

  render() {
    let pageContent;
    if (localStorage.getItem('userIsAuthenticated')) {
      pageContent = <RoutingContainer />;
    } else {
      pageContent = <Login errorMessage={this.props.error} handleChange={this.handleChange} handleClick={this.handleLogin} />;
    }

    return <div>{pageContent}</div>;
  }
}

Container.propTypes = {
  login: PropTypes.object.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  login: state.login.loginData,
  error: state.login.errorData,
});

export default connect(mapStateToProps, { fetchLogin })(Container);
