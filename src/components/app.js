import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Layout from "./Layout/Layout";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Dashboard />
      </Layout>
    );
  }
}
