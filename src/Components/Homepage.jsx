/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Services/cryptoApi';
// import Cryptocurrencies from './Cryptocurrencies';
import { Cryptocurrencies, News } from '.';

const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

const globalStats = data?.data?.stats;
if (isFetching) return 'Loading...';

// console.log('usegetcryptosquery ---',data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /> </Col>
        <Col span={12}><Statistic title="Total Exchange" value={millify(globalStats.totalExchanges)} /> </Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /> </Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /> </Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /> </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="hotm-title">Top 10 Cryto Currencies in the World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More </Link> </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="hotm-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More </Link> </Title>
      </div>
      <News />
    </>
  );
};

export default Homepage;
