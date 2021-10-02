/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../Services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cpList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
useEffect(() => {
  const filterdData = cpList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  setCryptos(filterdData);
}, [cpList, searchTerm]);
  if (isFetching) return 'Loading Coins...';
  return (
    <>
      {!simplified && (
      <div className="search-crypto">
        <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((coin) => (
          <Col xs={24} sm={12} lg={6} key={coin.id} className="crypto-card">
            <Link key={coin.id} to={`/crypto/${coin.id}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={<img className="crypto-image" src={coin.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(coin.price)}</p>
                <p>Martket: {millify(coin.marketCap)}</p>
                <p>Daily Change: {millify(coin.change)}</p>
                <p>Volume: {millify(coin.volume)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Cryptocurrencies;
