import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


export default class DashboardWeekHeader extends PureComponent {
  static propTypes = {
    headers: PropTypes.array,
  };

  render() {
    const { headers } = this.props;
    return (
      <div className="DashboardWeekHeader">
        {
          headers.slice(0, 1).map((header, index) => (
            <div key={index} className="DashboardWeekHeader__headerItem">
              <h3 className="DashboardWeekHeader__name">{header.name}</h3>
              <h5 className="DashboardWeekHeader__headerValue">{header.value}</h5>
              {
                header.growth !== null &&
                <span className={cx('DashboardWeekHeader__growth',{
                  'red': header.growth.trend === "-",
                  'green': header.growth.trend === "+",
                  'percentage': header.growth.trend === '%'})}>
                       <span>{header.growth.trend}</span>
                       <span>{header.growth.value}</span>
                     </span>
              }
            </div>
          ))
        }
        <div className="DashboardWeekHeader__body">
          {
            headers.slice(1).map((header, index) => (
              <div key={index} className="DashboardWeekHeader__bodyItem">
                <h3 className="DashboardWeekHeader__name">{header.name}</h3>
                <h6 className="DashboardWeekHeader__bodyValue">{header.value}</h6>
                {
                  header.growth !== null &&
                  <span className={cx('DashboardWeekHeader__growth',{
                    'red': header.growth.trend === "-",
                    'green': header.growth.trend === "+",
                    'percentage': header.growth.trend === '%'})}>
                       <span>{header.growth.trend}</span>
                       <span>{header.growth.value}</span>
                     </span>
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}