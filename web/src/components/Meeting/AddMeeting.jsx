import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, Table,Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
const { TextArea } = Input;

const AddMeeting = () => {
  const [form] = Form.useForm();
  const [members, setMembers] = useState([]);

  const handleAddRow = () => {
    setMembers([...members, {}]);
  };

  const handleDeleteRow = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };
const [gender,setGender] = useState([]);

  const handleGenderChange = (e) => {
    console.log('radio checked', e.target.value);
    setGender(e.target.value);
  };
  const columns = [
    {
      title: 'Họ tên',
      dataIndex: 'name',
      render: (_, record, index) => (
        <Form.Item name={['members', index, 'name']} noStyle>
          <Input placeholder="Nhập họ tên" />
        </Form.Item>
      ),
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birthdate',
      render: (_, record, index) => (
        <Form.Item name={['members', index, 'birthdate']} noStyle>
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
      ),
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      render: (_, record, index) => (
        <Form.Item name={['members', index, 'gender']} noStyle>
          {/* <Input placeholder="Nhập giới tính" /> */}
          <Radio.Group className="highlight-radio-group" onChange={handleGenderChange} value={gender}>
                      <Radio value='male'>Nam</Radio>
                      <Radio value='female'>Nữ</Radio>
                    </Radio.Group>
        </Form.Item>
      ),
    },
    {
      title: '',
      dataIndex: 'action',
      render: (_, record, index) => (
        <Button type="link" danger onClick={() => handleDeleteRow(index)}>
          Xóa
        </Button>
      ),
    },
  ];

  const handleSubmit = (values) => {
    console.log('Form values:', values);

  };
  //fetch API cho Minh (Tôi quên lệnh rồi nên tôi ChatGPT bừa đấy :))
//   const handleSubmit = async (values) => {
//     try {
//       const response = await fetch('https://example.com/api/meetings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       });
  
//       if (response.ok) {
//         console.log('Meeting added successfully');
//         form.resetFields();
//         setMembers([]);
//       } else {
//         console.error('Failed to add meeting');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

  return (
    <div>
      <h1>Thêm cuộc họp</h1>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="meetingCode"
          label="Mã cuộc họp"
          rules={[{ required: true, message: 'Vui lòng nhập mã cuộc họp' }]}
        >
          <Input placeholder="Nhập mã cuộc họp" />
        </Form.Item>

        <Form.Item
          name="meetingTime"
          label="Thời gian"
          rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>

        <Form.Item
          name="meetingLocation"
          label="Địa điểm"
          rules={[{ required: true, message: 'Vui lòng nhập địa điểm' }]}
        >
          <Input placeholder="Nhập địa điểm" />
        </Form.Item>

        <Form.Item name="meetingContent" label="Nội dung">
          <TextArea rows={4} placeholder="Nhập nội dung cuộc họp" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>

      <h2>Thành viên</h2>
      <Table
        dataSource={members}
        columns={columns}
        pagination={false}
        rowKey={(record, index) => index}
        footer={() => (
          <Button type="dashed" onClick={handleAddRow} block icon={<PlusOutlined />}>
            Thêm dòng
          </Button>
        )}
      />
    </div>
  );
};

export default AddMeeting;
