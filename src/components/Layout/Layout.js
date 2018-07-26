import React, { PureComponent } from 'react';


export default class Layout extends PureComponent {

  render() {
    return (
      <div>
       <header className="Header">
         <h3 className="white">Dashboard</h3>
       </header>
        {this.props.children}
      </div>
    );
  }
}