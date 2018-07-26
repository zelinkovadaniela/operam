import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DashboardWeek from "./DashboardWeek";


export default class DashboardWeeks extends PureComponent {
  static propTypes = {
    weeks: PropTypes.array,
  };

  render() {
    const { weeks } = this.props;
    return (
      <div className="DashboardWeeks">
        {
          weeks.map((week, index) => (
            <DashboardWeek week={week} key={`week_${index}`}/>
          ))
        }
      </div>
    );
  }
}