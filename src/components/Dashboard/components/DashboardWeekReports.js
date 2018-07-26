import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class DashboardWeekReports extends PureComponent {
  static propTypes = {
    reports: PropTypes.array,
  };

  render() {
    const { reports } = this.props;
    return (
      <div className="DashboardWeekReports">
        {
          reports && reports.length ?
            reports.map((report, index) => (
            <div key={`report_${index}`} className="DashboardWeekReports__report">{report}</div>
          ))
            :
            <div className="DashboardWeekReports__noReport">
              Report are generated automatically every Sunday at 11PM
            </div>
        }
      </div>
    );
  }
}