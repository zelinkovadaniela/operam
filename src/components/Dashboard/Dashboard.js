import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardHeader from './components/DashboardHeader';
import DashboardResult from './components/DashboardResult';
import DashboardWeeks from './components/DashboardWeeks';

class Dashboard extends Component {
  static propTypes = {
    campaign: PropTypes.object,
  };

  render() {
    const { campaign } = this.props;
    return (
      <div className="Dashboard">
        <DashboardHeader
          goal={campaign.goal}
          budget={campaign.budget}
          reach={campaign.reach}
          frequency={campaign.frequency}
        />
        <DashboardWeeks weeks={campaign.weeks}/>
        <DashboardResult
          goal={campaign.boxOffice.goal}
          actual={campaign.boxOffice.actual}
          difference={campaign.boxOffice.difference}
          reports={campaign.boxOffice.reports}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  campaign: state.dashboard.campaign,
});

export default connect(mapStateToProps)(Dashboard);