import React from 'react';
import dbstyle from './Dashboard.module.scss';
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/userActions';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUserData();
  }
  render() {
    const dashboardContents =
      this.props.user.length === 0 ? (
        <h1>Data Not Found</h1>
      ) : (
        <React.Fragment>
          <div className={dbstyle.dbheader}>
            <h2>Hi {this.props.name} </h2>
            <h4>Last Login: {this.props.lastlogin}</h4>
          </div>
          <hr />
          <h3>Account Balance : {this.props.balance}</h3>
          <table className={dbstyle.td_table}>
            <thead>
              <tr>
                <th>Due Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.accounts === undefined || this.props.accounts.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>
                    Loading...
                  </td>
                </tr>
              ) : (
                this.props.accounts.map((data, i) => (
                  <tr key={i}>
                    <td>{data.due}</td>
                    <td>{data.desc}</td>
                    <td>{data.amount}</td>
                    <td>{data.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </React.Fragment>
      );

    return <div className={dbstyle.dbcontent}>{dashboardContents}</div>;
  }
}

Dashboard.propTypes = {
  user: PropTypes.any,
  name: PropTypes.string,
  lastlogin: PropTypes.string,
  balance: PropTypes.string,
  accounts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  user: state.userData.user,
  name: state.userData.user.name,
  lastlogin: state.userData.user.lastlogin,
  balance: state.userData.user.balance,
  accounts: state.userData.user.tabledata,
});

export default connect(mapStateToProps, { fetchUserData })(Dashboard);
