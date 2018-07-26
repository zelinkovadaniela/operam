import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class DashboardResult extends PureComponent {
  static propTypes = {
    goal: PropTypes.string,
    actual: PropTypes.string,
    difference: PropTypes.object,
    reports: PropTypes.array,
  };

  render() {
    const { goal, actual, difference, reports } = this.props;
    return (
      <div className="DashboardWeek">
        <div className="DashboardResult">
          <h2 className="DashboardWeek__heading">Box Office</h2>
          <div className="DashboardResult__main">
            <div className="DashboardResult__mainFlex">
              <h3 className="white">Goal</h3>
              <h6 className="white">{goal}</h6>
            </div>
            <div className="DashboardResult__mainFlex">
              <h3 className="white">Actual</h3>
              <span className="DashboardResult__span">
              <h6 className="white">{actual}</h6>
              <span className="DashboardResult__growth white">{difference.percentage}</span>
            </span>
            </div>
          </div>
        </div>
        <div className="DashboardResult__report">
          <h2 className="DashboardWeek__heading">Reports</h2>
          {
            reports.map((report, index) => (
              <div key={`reportResult_${index}`} className="DashboardWeekReports__report">{report}</div>
            ))
          }
        </div>
      </div>
    );
  }
}