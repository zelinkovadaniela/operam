import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class DashboardResult extends PureComponent {
  static propTypes = {
    campaign: PropTypes.object,
  };

  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}