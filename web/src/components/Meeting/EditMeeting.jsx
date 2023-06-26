import React, { useState } from 'react';
import { Input, Button, Table, Modal, Form, DatePicker } from 'antd';
import moment from 'moment';

const { Column } = Table;

const data = [
  {
    key: '1',
    meetingCode: 'ABC123',
    creator: 'Thua Cay',
    content: 'Trông rất quen mà anh không nhớ đến đây bao giờ',
    createdAt: '2022-06-10',
    place: 'Điểm đến cuối cùng',
    participants: [
      {
        id: '1',
        name: 'Trước khi em tồn tại',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
      {
        id: '2',
        name: 'Sober Song',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
      {
        id: '3',
        name: 'Xin lỗi',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
    ],
  },
  {
    key: '2',
    meetingCode: 'DEF456',
    creator: 'Katarina du couteau',
    content: 'Ám sát vua J3',
    createdAt: '2022-06-12',
    place: 'Trà đá hồ gươm',
    participants: [
      {
        id: '1',
        name: 'Trước khi em tồn tại',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
      {
        id: '2',
        name: 'Sober Song',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
      {
        id: '3',
        name: 'Xin lỗi',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
    ],
  },
  {
    key: '3',
    meetingCode: 'GHI789',
    creator: 'Ayame Nakiri',
    content: 'Docchi Docchi Yodayo Ojou-sama',
    createdAt: '2022-06-08',
    place: 'Hóa ra em ở đây',
    participants: [
      {
        id: '1',
        name: 'Trước khi em tồn tại',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
      {
        id: '2',
        name: 'Sober Song',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
      {
        id: '3',
        name: 'Xin lỗi',
        birthdate: '01/02/2002',
        gender: 'Nam',
      },
    ],
  },
];

const EditMeeting = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editMeeting, setEditMeeting] = useState({});
  const [editParticipants, setEditParticipants] = useState([]);

  // Hàm tìm kiếm cuộc họp
  const searchMeetings = () => {
    // Thực hiện tìm kiếm trong danh sách cuộc họp
    const results = data.filter(
      (meeting) =>
        meeting.meetingCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meeting.creator.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  // Hàm xử lý khi người dùng nhấn nút "Sửa"
  const handleEdit = (index) => {
    setSelectedIndex(index);
    setEditMeeting(searchResults[index]);
    setEditParticipants(searchResults[index].participants);
    setModalVisible(true);
  };

  // Hàm cập nhật giá trị sửa
  const updateEditValue = (field, value) => {
    setEditMeeting((prevMeeting) => ({
      ...prevMeeting,
      [field]: value,
    }));
  };

  // Hàm lưu giá trị sửa
  const saveEditValue = () => {
    if (selectedIndex !== null) {
      const updatedResults = [...searchResults];
      updatedResults[selectedIndex] = {
        ...editMeeting,
        participants: editParticipants,
      };
      setSearchResults(updatedResults);
    }

    setModalVisible(false);
  };

  // Hàm xóa cuộc họp
  const handleDelete = (index) => {
    const updatedResults = [...searchResults];
    updatedResults.splice(index, 1);
    setSearchResults(updatedResults);
  };

  // Hàm thêm người tham gia
  const addParticipant = () => {
    const newParticipant = {
      id: String(editParticipants.length + 1),
      name: '',
      birthdate: '',
      gender: '',
    };
    setEditParticipants((prevParticipants) => [...prevParticipants, newParticipant]);
  };

  // Hàm xóa người tham gia
  const removeParticipant = (index) => {
    const updatedParticipants = [...editParticipants];
    updatedParticipants.splice(index, 1);
    setEditParticipants(updatedParticipants);
  };

  return (
    <div>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Tìm kiếm theo Mã cuộc họp hoặc Người tạo"
      />
      <Button type="primary" onClick={searchMeetings}>
        Tìm kiếm
      </Button>

      <Table dataSource={searchResults} rowKey="key">
        <Column title="Mã cuộc họp" dataIndex="meetingCode" key="meetingCode" />
        <Column title="Người tạo" dataIndex="creator" key="creator" />
        <Column title="Nội dung" dataIndex="content" key="content" />
        <Column title="Địa điểm" dataIndex="place" key="place" />
        <Column
          title="Ngày diễn ra"
          dataIndex="createdAt"
          key="createdAt"
          render={(text) => moment(text).format('YYYY-MM-DD')}
        />
        <Column
          title="Thao tác"
          key="action"
          render={(_, record, index) => (
            <Button type="link" onClick={() => handleEdit(index)}>
              Sửa
            </Button>
          )}
        />
        <Column
          title=""
          key="action2"
          render={(_, record, index) => (
            <Button type="link" onClick={() => handleDelete(index)}>
              Xóa
            </Button>
          )}
        />
      </Table>

      <Modal
        title="Sửa cuộc họp"
        visible={modalVisible}
        onOk={saveEditValue}
        onCancel={() => setModalVisible(false)}
        width={800}
      >
        <Form>
          <Form.Item label="Mã cuộc họp">
            <Input
              value={editMeeting.meetingCode}
              onChange={(e) => updateEditValue('meetingCode', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Người tạo">
            <Input
              value={editMeeting.creator}
              onChange={(e) => updateEditValue('creator', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Nội dung">
            <Input
              value={editMeeting.content}
              onChange={(e) => updateEditValue('content', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Địa điểm">
            <Input
              value={editMeeting.place}
              onChange={(e) => updateEditValue('place', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Ngày diễn ra">
            <DatePicker
              value={moment(editMeeting.createdAt)}
              onChange={(date) => updateEditValue('createdAt', date.format())}
            />
          </Form.Item>
          <Form.Item label="Người tham gia">
            <Table
              size="small"
              bordered
              dataSource={editParticipants}
              rowKey="id"
              pagination={false}
              columns={[
                {
                  title: 'Tên',
                  dataIndex: 'name',
                  key: 'name',
                  render: (_, record, index) => (
                    <Input
                      value={record.name}
                      onChange={(e) => {
                        const updatedParticipants = [...editParticipants];
                        updatedParticipants[index].name = e.target.value;
                        setEditParticipants(updatedParticipants);
                      }}
                    />
                  ),
                },
                {
                  title: 'Ngày sinh',
                  dataIndex: 'birthdate',
                  key: 'birthdate',
                  render: (_, record, index) => (
                    <Input
                      value={record.birthdate}
                      onChange={(e) => {
                        const updatedParticipants = [...editParticipants];
                        updatedParticipants[index].birthdate = e.target.value;
                        setEditParticipants(updatedParticipants);
                      }}
                    />
                  ),
                },
                {
                  title: 'Giới tính',
                  dataIndex: 'gender',
                  key: 'gender',
                  render: (_, record, index) => (
                    <Input
                      value={record.gender}
                      onChange={(e) => {
                        const updatedParticipants = [...editParticipants];
                        updatedParticipants[index].gender = e.target.value;
                        setEditParticipants(updatedParticipants);
                      }}
                    />
                  ),
                },
                {
                  title: 'Hành động',
                  dataIndex: 'action',
                  key: 'action',
                  render: (_, record, index) => (
                    <Button type="link" onClick={() => removeParticipant(index)}>
                      Xóa
                    </Button>
                  ),
                },
              ]}
            />
            <Button type="dashed" onClick={addParticipant} style={{ marginTop: '10px' }}>
              Thêm người tham gia
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default EditMeeting;
