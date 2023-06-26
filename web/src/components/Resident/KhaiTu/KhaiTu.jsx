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
function KhaiTu() {
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
        name="identity card of the declarant"
        label="identity card of the declarant"
        rules={[
          // {
          //   type: 'number',
          //   message: 'The input is not valid CMT!',
          // },
          {
            required: true,
            message: 'Please input your identity card of the declarant!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="identity card of the dead"
        label="identity card of the dead"
        rules={[
          // {
          //   type: 'number',
          //   message: 'The input is not valid CMT!',
          // },
          {
            required: true,
            message: 'Please input your identity card of the dead!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="declaration number"
        label="declaration number"
        rules={[
          {
            required: true,
            message: 'Please input your declaration number!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="range-picker"
        label="RangePicker"
        rules={[
          { type: 'array', required: true, message: 'Please select time!' },
        ]}>
        <RangePicker />
      </Form.Item>

      <Form.Item
        name="Reason"
        label="Reason"
        rules={[
          {
            required: true,
            message: 'Please input Reason',
          },
        ]}>
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
export default KhaiTu;
