import React, { useEffect, useState } from 'react';
import { Table, Input, Modal, Form, DatePicker, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
const { Search } = Input;
const Meeting = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const [data, setData] = useState([]);

  const [editMeeting, setEditMeeting] = useState({});
  // Hàm cập nhật giá trị sửa
  const updateEditValue = (field, value) => {
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      [field]: value,
    }));
  };
  // Hàm lưu giá trị sửa
  const saveEditValue = () => {
    const updatedData = data.map(meeting => {
      if (meeting.maCuocHop === selectedRowData.maCuocHop) {
        return selectedRowData;
      }
      return meeting;
    });
    setData(updatedData);
    setIsModalVisible(false);
    setIsModalVisible2(false);
  };
  // Hàm xóa cuộc họp
  const handleDelete = index => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    setIsModalVisible(false);
    setIsModalVisible2(false);
  };

  // Hàm thêm người tham gia
  const addParticipant = () => {
    const newParticipant = {
      hoTen: '',
      birthdate: '',
      gioiTinh: '',
    };
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      nguoiThamGia: [...prevMeeting.nguoiThamGia, newParticipant],
    }));
  };

  // Hàm xóa người tham gia
  const removeParticipant = index => {
    const updatedParticipants = [...selectedRowData.nguoiThamGia];
    updatedParticipants.splice(index, 1);
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      nguoiThamGia: updatedParticipants,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/meeting/');
        if (response.status === 200) {
          const resData = response.data;
          setData(resData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const handleSearch = value => {
    setSearchText(value);
  };

  const handleRowClick = record => {
    setSelectedRowData(record);
    setIsModalVisible2(true);
  };
  const handleEdit = record => {
    setSelectedRowData(record);
    setIsModalVisible2(false);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsModalVisible2(false);
  };

  const columns = [
    {
      title: 'Mã cuộc họp',
      dataIndex: 'maCuocHop',
      sorter: (a, b) => a.meetingCode.localeCompare(b.meetingCode),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Người tạo',
      dataIndex: 'hoTen',
    },
    {
      title: 'Nội dung chính',
      dataIndex: 'noiDung',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'ngayTaoCuocHop',
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      sortDirections: ['ascend', 'descend'],
      render: date => new Date(date).toLocaleDateString('vi-VN'),
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record, index) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          Thao Tác
        </Button>
      ),
    },
  ];

  const filteredData = searchText
    ? data.filter(record =>
        columns.some(column =>
          record[column.dataIndex]
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase()),
        ),
      )
    : data;

  return (
    <div>
      <Search
        placeholder="Tìm kiếm"
        value={searchText}
        onChange={e => handleSearch(e.target.value)}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        onRow={record => ({
          onClick: () => {
            handleRowClick(record);
            // console.log(record);
          },
        })}
      />
      <Modal
        title="Thông tin cuộc họp"
        visible={isModalVisible2}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <div>
            <p>
              <strong>Mã cuộc họp:</strong> {selectedRowData.maCuocHop}
            </p>
            <p>
              <strong>Người Tạo:</strong> {selectedRowData.hoTen}
            </p>
            <p>
              <strong>Nội Dung:</strong> {selectedRowData.noiDung}
            </p>
            <p>
              <strong>Ngày diễn ra:</strong>{' '}
              {moment(selectedRowData.ngayTaoCuocHop).format('YYYY-MM-DD ')}
            </p>
            <p>
              <strong>Địa điểm:</strong> {selectedRowData.diaDiem}
            </p>
            <p>
              <strong>Người tham gia:</strong>
            </p>
            <Table
              size="small"
              bordered
              dataSource={selectedRowData['nguoiThamGia']}
              pagination={false}
              columns={[
                {
                  title: 'Tên',
                  dataIndex: 'hoTen',
                  key: 'hoTen',
                  render: (_, record) => <p>{record.hoTen}</p>,
                },
                {
                  title: 'Ngày sinh',
                  dataIndex: 'birthdate',
                  key: 'birthdate',
                  render: (_, record) => (
                    <p>{moment(record.namSinh).format('YYYY-MM-DD')}</p>
                  ),
                },
                {
                  title: 'Giới tính',
                  dataIndex: 'gioiTinh',
                  key: 'gioiTinh',
                  render: (_, record) => <p>{record.gioiTinh}</p>,
                },
              ]}
            />
          </div>
        )}
      </Modal>
      <Modal
        title="Thông tin cuộc họp"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <div>
            <p>
              <strong>Mã cuộc họp:</strong> {selectedRowData.maCuocHop}
            </p>
            <p>
              <strong>Người Tạo:</strong> {selectedRowData.hoTen}
            </p>
            <Form>
              <Form.Item label="Nội Dung">
                <Input
                  value={selectedRowData.noiDung}
                  onChange={e => updateEditValue('noiDung', e.target.value)}
                />
              </Form.Item>
            </Form>
            <Form.Item label="Ngày diễn ra">
              <DatePicker
                value={moment(selectedRowData.ngayTaoCuocHop)}
                onChange={date =>
                  updateEditValue('ngayTaoCuocHop', date.format())
                }
              />
            </Form.Item>
            <Form>
              <Form.Item label="Địa điểm">
                <Input
                  value={selectedRowData.diaDiem}
                  onChange={e => updateEditValue('diaDiem', e.target.value)}
                />
              </Form.Item>
            </Form>
            <Form.Item label="Người tham gia">
              <Table
                size="small"
                bordered
                dataSource={selectedRowData['nguoiThamGia']}
                pagination={false}
                columns={[
                  {
                    title: 'Tên',
                    dataIndex: 'hoTen',
                    key: 'hoTen',
                    render: (_, record, index) => (
                      <Input
                        value={record.hoTen}
                        onChange={e => {
                          const updatedParticipants = [
                            ...selectedRowData.nguoiThamGia,
                          ];
                          updatedParticipants[index].hoTen = e.target.value;
                          updateEditValue('nguoiThamGia', updatedParticipants);
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
                        value={moment(record.namSinh).format('YYYY-MM-DD')}
                        onChange={e => {
                          const updatedParticipants = [
                            ...selectedRowData.nguoiThamGia,
                          ];
                          updatedParticipants[index].namSinh = e.target.value;
                          updateEditValue('nguoiThamGia', updatedParticipants);
                        }}
                      />
                    ),
                  },
                  {
                    title: 'Giới tính',
                    dataIndex: 'gioiTinh',
                    key: 'gioiTinh',
                    render: (_, record, index) => (
                      <Input
                        value={record.gioiTinh}
                        onChange={e => {
                          const updatedParticipants = [
                            ...selectedRowData.nguoiThamGia,
                          ];
                          updatedParticipants[index].gioiTinh = e.target.value;
                          updateEditValue('nguoiThamGia', updatedParticipants);
                        }}
                      />
                    ),
                  },
                  {
                    title: 'Hành động',
                    dataIndex: 'action',
                    key: 'action',
                    render: (_, record, index) => (
                      <Button
                        type="link"
                        onClick={() => removeParticipant(index)}>
                        Xóa
                      </Button>
                    ),
                  },
                ]}
              />
              <Button
                type="dashed"
                onClick={addParticipant}
                style={{ marginTop: '10px' }}>
                Thêm người tham gia
              </Button>
            </Form.Item>
          </div>
        )}

        <div>
          <Button onClick={saveEditValue} style={{ marginTop: '10px' }}>
            OK
          </Button>
          <Button
            onClick={() => handleDelete(selectedRowData.maCuocHop)}
            style={{ marginTop: '10px' }}>
            Xóa Nhóm
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Meeting;
