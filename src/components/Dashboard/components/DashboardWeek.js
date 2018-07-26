import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DashboardWeekHeader from './DashboardWeekHeader';
import DashboardWeekReports from './DashboardWeekReports';
import DashboardWeekNotes from './DashboardWeekNotes';
import DashboardWeekCreatives from './DashboardWeekCreatives';


export default class DashboardWeek extends PureComponent {
  static propTypes = {
    week: PropTypes.object,
  };

  render() {
    const { week } = this.props;
    return (
      <div className="DashboardWeek">
        <h2 className="DashboardWeek__heading">{week.name}</h2>
        <DashboardWeekHeader headers={week.content.headers}/>

        <h2 className="DashboardWeek__heading">Reports</h2>
        <DashboardWeekReports reports={week.content.reports}/>

        <h2 className="DashboardWeek__heading">Notes</h2>
        <DashboardWeekNotes notes={week.content.notes}/>

        <h2 className="DashboardWeek__heading">Creatives</h2>
        <DashboardWeekCreatives creatives={week.content.creatives}/>
      </div>
    );
  }
}