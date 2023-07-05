import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const label = ['Nam', 'Nữ', 'Khác'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central">
      {`${label[index]} - ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TiLeNamNu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/resident/');
        if (response.status === 200) {
          setData([
            {
              name: 'Nam',
              value: [...response.data].filter(
                x => x.gioiTinh.toLowerCase() == 'nam',
              ).length,
            },
            {
              name: 'Nữ',
              value: [...response.data].filter(
                x => x.gioiTinh.toLowerCase() == 'nữ',
              ).length,
            },
            {
              name: 'khác',
              value: [...response.data].filter(
                x => x.gioiTinh.toLowerCase() == 'khác',
              ).length,
            },
          ]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const otherTotal = data.find(item => item.name === 'khác')
    ? data.find(item => item.name === 'khác').value
    : 0;
  const maleTotal = data.find(item => item.name === 'Nam')
    ? data.find(item => item.name === 'Nam').value
    : 0;
  const femaleTotal = data.find(item => item.name === 'Nữ')
    ? data.find(item => item.name === 'Nữ').value
    : 0;
  const total = maleTotal + femaleTotal + otherTotal;
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic title="Tổng " value={total} precision={0} />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Số lượng Nam"
              value={maleTotal}
              precision={0}
              valueStyle={{
                color: '#0000FF',
              }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Số lượng Nữ"
              value={femaleTotal}
              precision={0}
              valueStyle={{
                color: '#cf1322',
              }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Giới tính khác"
              value={otherTotal}
              precision={0}
              valueStyle={{
                color: '#FFCC00',
              }}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <ResponsiveContainer width={500} height={500}>
            <PieChart width={500} height={500}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Col>
        <Col span={12}>
          <ResponsiveContainer width={500} height={500}>
            <BarChart
              width={500}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </div>
  );
};

export default TiLeNamNu;
