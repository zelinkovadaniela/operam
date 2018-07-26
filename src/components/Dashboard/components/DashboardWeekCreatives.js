import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


export default class DashboardWeekCreatives extends PureComponent {
  static propTypes = {
    creatives: PropTypes.array
  };

  render() {
    const { creatives } = this.props;
    return(
      <div className="DashboardWeekCreatives">
        {
          creatives && creatives.map((item,index) => (
            <table className="DashboardWeekCreatives__item" key={`item_${item.name}_${index}`}>
              <tbody>
              <tr className="DashboardWeekCreatives__tableRow first">
                <th className="DashboardWeekCreatives__tableHead first"><h4>
                  <i className={item.ico ? item.ico : `ico ico-${item.name}`}></i>
                  {item.name}</h4></th>
                {
                  item.tableHead.map((thead, index) => (
                    <th key={`tableHead_${index}`} className="DashboardWeekCreatives__tableHead">
                      <h4>{thead}</h4>
                    </th>
                  ))
                }
              </tr>
              {
                item.tableDetails.map((tableDetail, index) => (
                  <tr key={`tableDetail_${index}`} className="DashboardWeekCreatives__tableRow">
                    <td className={cx("DashboardWeekCreatives__tableDetail first", {'noBorder': !tableDetail.imp})}>
                      <div className="DashboardWeekCreatives__tableItem">
                        {
                          tableDetail.imgPath &&
                          <img className="DashboardWeekCreatives__tableItemImg" src={`../../../public/img/${tableDetail.imgPath}`} alt={tableDetail.name}/>
                        }
                        <span className="DashboardWeekCreatives__span">
                          <div className="h8">{tableDetail.type}</div>
                        <div className="h7">{tableDetail.name}</div>
                        </span>
                      </div>
                    </td>
                    <td className={cx("DashboardWeekCreatives__tableDetail", {'noBorder': !tableDetail.imp})}><span className="h7">{tableDetail.imp}</span></td>
                    <td className={cx("DashboardWeekCreatives__tableDetail", {'noBorder': !tableDetail.psr})}><span className="h7">{tableDetail.psr}</span></td>
                    <td className={cx("DashboardWeekCreatives__tableDetail", {'noBorder': !tableDetail.views})}><span className="h7">{tableDetail.views}</span></td>
                    <td className={cx("DashboardWeekCreatives__tableDetail", {'noBorder': !tableDetail.cpv})}><span className="h7">{tableDetail.cpv}</span></td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          ))
        }
      </div>
    );
  }
}