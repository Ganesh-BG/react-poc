import React from 'react';
import teamstyle from './Team.module.scss';
import { connect } from 'react-redux';
import { fetchTeamDetails } from '../../actions/teamActions';
import PropTypes from 'prop-types';

class Team extends React.Component {
  componentDidMount() {
    this.props.fetchTeamDetails();
  }

  render() {
    const teamContent =
      this.props.users.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ul className={teamstyle.teamlist}>
            {this.props.users.map((member) => {
              return (
                <li key={member.id}>
                  <b>{member.name}</b>
                </li>
              );
            })}
          </ul>
        </div>
      );
    return (
      <div className={teamstyle.team_container}>
        <h2>Team Information</h2>
        <hr />
        {teamContent}
      </div>
    );
  }
}

Team.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users.items,
});

export default connect(mapStateToProps, { fetchTeamDetails })(Team);
