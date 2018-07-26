import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class DashboardWeekNotes extends PureComponent {
  static propTypes = {
    notes: PropTypes.string,
  };

  render() {
    const { notes } = this.props;
    return (
      <div className="DashboardWeekNotes">
        {
          notes ?
            <span className="DashboardWeekNotes__notes">{notes}</span>
            :
            <span className="DashboardWeekNotes__noNotes">Add note</span>
        }
      </div>
    );
  }
}