import { Layout, Space, Typography } from 'antd';
import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import {
  Navbar,
  Exchanges,
  CryptoDetials,
  Cryptocurrencies,
  Homepage,
  News,
} from './Components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />{' '}
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/crypto/:coinId">
                <CryptoDetials />
              </Route>
              <Route path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Copyright © 2021
            <Link to="/">Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
