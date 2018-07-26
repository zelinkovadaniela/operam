import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class DashboardHeader extends PureComponent {
  static propTypes = {
    budget: PropTypes.string,
    frequency: PropTypes.number,
    goal: PropTypes.string,
    reach: PropTypes.string,
  };

  render() {
    const {
      budget,
      frequency,
      goal,
      reach,
    } = this.props;
    return (
      <div className="DashboardHeader">
        <h2 className="DashboardWeek__heading green">Campaign start</h2>
        <div className="DashboardHeader__items">
          <div className="DashboardHeader__itemMain">
            <h3 className="DashboardHeader__itemHeading">Box office goal</h3>
            <h5 className="DashboardHeader__itemContent">{goal}</h5>
          </div>
          <div className="DashboardHeader__item">
            <h3 className="DashboardHeader__itemHeading">Budget</h3>
            <h6 className="DashboardHeader__itemContent">{budget}</h6>
          </div>
          <div className="DashboardHeader__item">
            <h3 className="DashboardHeader__itemHeading">Reach</h3>
            <h6 className="DashboardHeader__itemContent">{reach}</h6>
          </div>
          <div className="DashboardHeader__item">
            <h3 className="DashboardHeader__itemHeading">Frequency</h3>
            <h6 className="DashboardHeader__itemContent">{frequency}&times;</h6>
          </div>
        </div>
      </div>
    );
  }
}