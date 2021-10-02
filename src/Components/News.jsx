/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import moment from 'moment';
import { Typography, Select, Row, Col, Card, Avatar } from 'antd';
import { useGetCryptoNewsQuery } from '../Services/cryptoNewsApi';
import { useGetCryptosQuery } from '../Services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 30,
  });
  const { data } = useGetCryptosQuery(100);
  // console.log('news api---', cryptoNews);
  if (!cryptoNews?.value) return 'Loading Latest News...';
  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              style={{ position: 'fixed', top: '0px', zIndex: 1 }}
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency, id) => <Option value={currency.name} key={id}>{currency.name}</Option>)}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    style={{ maxWidth: '200px', maxHeight: '100px' }}
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="News"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl
                        || demoImage
                      }
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}{' '}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf('ss').fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
