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

function EditMeeting() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editMeeting, setEditMeeting] = useState({});
  const [editParticipants, setEditParticipants] = useState([]);

  // Hàm tìm kiếm cuộc họp
  function searchMeetings() {
    // Thực hiện tìm kiếm trong danh sách cuộc họp
    const results = data.filter(
      (meeting) =>
        meeting.meetingCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meeting.creator.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }

  // Hàm xử lý khi người dùng nhấn nút "Sửa"
  function handleEdit(index) {
    setSelectedIndex(index);
    setEditMeeting(searchResults[index]);
    setEditParticipants(searchResults[index].participants);
    setModalVisible(true);
  }

  // Hàm cập nhật giá trị sửa
  function updateEditValue(field, value) {
    setEditMeeting((prevMeeting) => ({
      ...prevMeeting,
      [field]: value,
    }));
  }

  // Hàm thêm người tham gia
  function addParticipant() {
    const newParticipant = {
      id: Math.random().toString(),
      name: '',
      birthdate: null,
      gender: '',
    };

    setEditParticipants((prevParticipants) => [...prevParticipants, newParticipant]);
  }

  // Hàm cập nhật thông tin người tham gia
  function updateParticipantValue(index, field, value) {
    setEditParticipants((prevParticipants) => {
      const updatedParticipants = [...prevParticipants];
      updatedParticipants[index][field] = value;
      return updatedParticipants;
    });
  }

  // Hàm xóa người tham gia
  function deleteParticipant(index) {
    setEditParticipants((prevParticipants) => {
      const updatedParticipants = [...prevParticipants];
      updatedParticipants.splice(index, 1);
      return updatedParticipants;
    });
  }

  // Hàm lưu giá trị sửa
  function saveEditValue() {
    if (selectedIndex !== null) {
      const updatedResults = [...searchResults];
      updatedResults[selectedIndex] = {
        ...editMeeting,
        participants: editParticipants,
      };
      setSearchResults(updatedResults);
    }

    setModalVisible(false);
  }

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

      {searchResults.length > 0 && (
        <Table dataSource={searchResults} rowKey="key">
          <Column title="Mã cuộc họp" dataIndex="meetingCode" key="meetingCode" />
          <Column title="Người tạo" dataIndex="creator" key="creator" />
          <Column title="Nội dung" dataIndex="content" key="content" />
          <Column title="Ngày" dataIndex="createdAt" key="createdAt" />
          <Column title="Địa điểm" dataIndex="place" key="place" />
          <Column
            title="Danh sách người tham gia"
            dataIndex="participants"
            key="participants"
            render={(participants) => (
              <ul>
                {participants.map((participant) => (
                  <li key={participant.id}>{participant.name}</li>
                ))}
              </ul>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(_, record, index) => (
              <div>
                <Button onClick={() => handleEdit(index)}>Sửa</Button>
              </div>
            )}
          />
        </Table>
      )}

      <Modal
        title="Sửa thông tin cuộc họp"
        visible={modalVisible}
        onOk={saveEditValue}
        onCancel={() => setModalVisible(false)}
      >
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="Mã cuộc họp">
            <Input value={editMeeting.meetingCode} disabled />
          </Form.Item>
          <Form.Item label="Người tạo">
            <Input value={editMeeting.creator} disabled />
          </Form.Item>
          <Form.Item label="Nội dung">
            <Input
              value={editMeeting.content}
              onChange={(e) => updateEditValue('content', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Ngày">
            <DatePicker
              value={editMeeting.createdAt ? moment(editMeeting.createdAt) : null}
              onChange={(date) => updateEditValue('createdAt', date)}
            />
          </Form.Item>
          <Form.Item label="Địa điểm">
            <Input
              value={editMeeting.place}
              onChange={(e) => updateEditValue('place', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Danh sách người tham gia">
            <Table
              dataSource={editParticipants}
              rowKey="id"
              pagination={false}
              size="small"
              bordered
              columns={[
                { title: 'Tên', dataIndex: 'name', key: 'name' },
                { title: 'Ngày sinh', dataIndex: 'birthdate', key: 'birthdate' },
                { title: 'Giới tính', dataIndex: 'gender', key: 'gender' },
                {
                  title: 'Action',
                  key: 'action',
                  render: (_, record, index) => (
                    <Button type="link" onClick={() => deleteParticipant(index)}>
                      Xóa
                    </Button>
                  ),
                },
              ]}
              footer={() => (
                <Button type="primary" onClick={addParticipant}>
                  Thêm người tham gia
                </Button>
              )}
              renderItem={(item, index) => (
                <Table.Item>
                  <Table.ItemCell>
                    <Input
                      value={item.name}
                      onChange={(e) => updateParticipantValue(index, 'name', e.target.value)}
                    />
                  </Table.ItemCell>
                  <Table.ItemCell>
                    <DatePicker
                      value={item.birthdate ? moment(item.birthdate) : null}
                      onChange={(date) => updateParticipantValue(index, 'birthdate', date)}
                    />
                  </Table.ItemCell>
                  <Table.ItemCell>
                    <Input
                      value={item.gender}
                      onChange={(e) => updateParticipantValue(index, 'gender', e.target.value)}
                    />
                  </Table.ItemCell>
                </Table.Item>
              )}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default EditMeeting;
