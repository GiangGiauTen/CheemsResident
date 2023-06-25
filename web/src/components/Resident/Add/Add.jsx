import React from 'react';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import { useState } from 'react';
const { Option } = Select;
const { RangePicker } = DatePicker;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Add = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    // Gửi dữ liệu đi hoặc xử lý dữ liệu ở đây
    console.log('Received values of form: ', values);
    // Ví dụ: gửi dữ liệu đi qua API
    fetch('https://example.com/submit', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Xử lý kết quả nếu cần
        console.log(data);
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Error:', error);
      });
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.com', '.org', '.net'].map(domain => `${value}${domain}`),
      );
    }
  };
  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError>
      <Form.Item
        name="Name"
        label="Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name="Other Name" label="Other Name(if any)">
        <Input />
      </Form.Item>
      <Form.Item
        name="date-picker"
        label="Date of birth"
        rules={[
          { type: 'object', required: true, message: 'Please select time!' },
        ]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}>
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="place of birth"
        label="Place of Birth"
        rules={[
          {
            required: true,
            message: 'Please input your place!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Religion"
        label="Religion"
        rules={[
          {
            required: true,
            message: 'Please input your Religion!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="ethnic"
        label="Ethnic"
        rules={[
          {
            required: true,
            message: 'Please input your ethnic!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Nationality"
        label="Nationality"
        rules={[
          {
            required: true,
            message: 'Please input your Nationality',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="identity card number"
        label="identity card number"
        rules={[
          // {
          //   type: 'number',
          //   message: 'The input is not valid CMT!',
          // },
          {
            required: true,
            message: 'Please input your identity card number!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name="passport number" label="passport number">
        <Input />
      </Form.Item>
      <Form.Item
        name="Literacy"
        label="Literacy"
        rules={[
          {
            required: true,
            message: 'Please input your Literacy!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Qualification"
        label="Qualification"
        rules={[
          {
            required: true,
            message: 'Please input your Qualification!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Foreign language level"
        label="Foreign language level"
        rules={[
          {
            required: true,
            message: 'Please input your Literacy!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Job"
        label="Job"
        rules={[
          {
            required: true,
            message: 'Please input your Job!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Workplace"
        label="Workplace"
        rules={[
          {
            required: true,
            message: 'Please input your Workplace!',
            whitespace: true,
          },
        ]}>
        <Input />
      </Form.Item>
    </Form>
  );
};
export default Add;
