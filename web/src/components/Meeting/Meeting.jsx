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
  const [data, setData] = useState([]);

  const [editMeeting, setEditMeeting] = useState({});
  // Hàm cập nhật giá trị sửa
  const updateEditValue = (field, value) => {
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      [field]: value,
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
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  // const data = [
  //   {
  //     key: '1',
  //     maCuocHop: 'ABC123',
  //     hoTen: 'Thua Cay',
  //     noiDung: 'Trông rất quen mà anh không nhớ đến đây bao giờ',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Điểm đến cuối cùng',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Trước khi em tồn tại',
  //         namSinh: '01/02/2002',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Sober Song',
  //         namSinh: '01/02/2002',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Xin lỗi',
  //         namSinh: '01/02/2002',
  //         gioiTinh: 'Nam',
  //       },
  //     ],
  //   },
  //   {
  //     key: '2',
  //     maCuocHop: 'ABC2',
  //     hoTen: 'Người thứ 2',
  //     noiDung: 'Nội dung cuộc họp thứ 2',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 2',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //     ],
  //   },
  //   {
  //     key: '3',
  //     maCuocHop: 'ABC3',
  //     hoTen: 'Người thứ 3',
  //     noiDung: 'Nội dung cuộc họp thứ 3',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 3',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Người tham dự 3',
  //         namSinh: '01/01/1985',
  //         gioiTinh: 'Nam',
  //       },
  //     ],
  //   },
  //   {
  //     key: '4',
  //     maCuocHop: 'ABC4',
  //     hoTen: 'Người thứ 4',
  //     noiDung: 'Nội dung cuộc họp thứ 4',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 4',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Người tham dự 3',
  //         namSinh: '01/01/1985',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '4',
  //         hoTen: 'Người tham dự 4',
  //         namSinh: '01/01/1992',
  //         gioiTinh: 'Nữ',
  //       },
  //     ],
  //   },
  //   {
  //     key: '5',
  //     maCuocHop: 'ABC5',
  //     hoTen: 'Người thứ 5',
  //     noiDung: 'Nội dung cuộc họp thứ 5',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 5',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Người tham dự 3',
  //         namSinh: '01/01/1985',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '4',
  //         hoTen: 'Người tham dự 4',
  //         namSinh: '01/01/1992',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '5',
  //         hoTen: 'Người tham dự 5',
  //         namSinh: '01/01/1998',
  //         gioiTinh: 'Nam',
  //       },
  //     ],
  //   },
  //   {
  //     key: '6',
  //     maCuocHop: 'ABC6',
  //     hoTen: 'Người thứ 6',
  //     noiDung: 'Nội dung cuộc họp thứ 6',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 6',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Người tham dự 3',
  //         namSinh: '01/01/1985',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '4',
  //         hoTen: 'Người tham dự 4',
  //         namSinh: '01/01/1992',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '5',
  //         hoTen: 'Người tham dự 5',
  //         namSinh: '01/01/1998',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '6',
  //         hoTen: 'Người tham dự 6',
  //         namSinh: '01/01/1988',
  //         gioiTinh: 'Nữ',
  //       },
  //     ],
  //   },
  //   {
  //     key: '7',
  //     maCuocHop: 'ABC7',
  //     hoTen: 'Người thứ 7',
  //     noiDung: 'Nội dung cuộc họp thứ 7',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 7',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Người tham dự 3',
  //         namSinh: '01/01/1985',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '4',
  //         hoTen: 'Người tham dự 4',
  //         namSinh: '01/01/1992',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '5',
  //         hoTen: 'Người tham dự 5',
  //         namSinh: '01/01/1998',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '6',
  //         hoTen: 'Người tham dự 6',
  //         namSinh: '01/01/1988',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '7',
  //         hoTen: 'Người tham dự 7',
  //         namSinh: '01/01/1993',
  //         gioiTinh: 'Nam',
  //       },
  //     ],
  //   },
  //   {
  //     key: '8',
  //     maCuocHop: 'ABC8',
  //     hoTen: 'Người thứ 8',
  //     noiDung: 'Nội dung cuộc họp thứ 8',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 8',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Người tham dự 3',
  //         namSinh: '01/01/1985',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '4',
  //         hoTen: 'Người tham dự 4',
  //         namSinh: '01/01/1992',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '5',
  //         hoTen: 'Người tham dự 5',
  //         namSinh: '01/01/1998',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '6',
  //         hoTen: 'Người tham dự 6',
  //         namSinh: '01/01/1988',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '7',
  //         hoTen: 'Người tham dự 7',
  //         namSinh: '01/01/1993',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '8',
  //         hoTen: 'Người tham dự 8',
  //         namSinh: '01/01/1991',
  //         gioiTinh: 'Nam',
  //       },
  //     ],
  //   },
  //   {
  //     key: '9',
  //     maCuocHop: 'ABC9',
  //     hoTen: 'Người thứ 9',
  //     noiDung: 'Nội dung cuộc họp thứ 9',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 9',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Người tham dự 3',
  //         namSinh: '01/01/1985',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '4',
  //         hoTen: 'Người tham dự 4',
  //         namSinh: '01/01/1992',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '5',
  //         hoTen: 'Người tham dự 5',
  //         namSinh: '01/01/1998',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '6',
  //         hoTen: 'Người tham dự 6',
  //         namSinh: '01/01/1988',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '7',
  //         hoTen: 'Người tham dự 7',
  //         namSinh: '01/01/1993',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '8',
  //         hoTen: 'Người tham dự 8',
  //         namSinh: '01/01/1991',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '9',
  //         hoTen: 'Người tham dự 9',
  //         namSinh: '01/01/1996',
  //         gioiTinh: 'Nam',
  //       },
  //     ],
  //   },
  //   {
  //     key: '10',
  //     maCuocHop: 'ABC10',
  //     hoTen: 'Người thứ 10',
  //     noiDung: 'Nội dung cuộc họp thứ 10',
  //     ngayTaoCuocHop: '2022-06-10',
  //     diaDiem: 'Địa điểm cuộc họp thứ 10',
  //     nguoiThamGia: [
  //       {
  //         id: '1',
  //         hoTen: 'Người tham dự 1',
  //         namSinh: '01/01/1990',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '2',
  //         hoTen: 'Người tham dự 2',
  //         namSinh: '01/01/1995',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '3',
  //         hoTen: 'Người tham dự 3',
  //         namSinh: '01/01/1985',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '4',
  //         hoTen: 'Người tham dự 4',
  //         namSinh: '01/01/1992',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '5',
  //         hoTen: 'Người tham dự 5',
  //         namSinh: '01/01/1998',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '6',
  //         hoTen: 'Người tham dự 6',
  //         namSinh: '01/01/1988',
  //         gioiTinh: 'Nữ',
  //       },
  //       {
  //         id: '7',
  //         hoTen: 'Người tham dự 7',
  //         namSinh: '01/01/1993',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '8',
  //         hoTen: 'Người tham dự 8',
  //         namSinh: '01/01/1991',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '9',
  //         hoTen: 'Người tham dự 9',
  //         namSinh: '01/01/1996',
  //         gioiTinh: 'Nam',
  //       },
  //       {
  //         id: '10',
  //         hoTen: 'Người tham dự 10',
  //         namSinh: '01/01/1989',
  //         gioiTinh: 'Nữ',
  //       },
  //     ],
  //   },
  // ];
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
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <div>
            <Form>
              <Form.Item label="Mã cuộc họp">
                <Input
                  value={selectedRowData.maCuocHop}
                  onChange={e => updateEditValue('maCuocHop', e.target.value)}
                />
              </Form.Item>
            </Form>
            <Form>
              <Form.Item label="Người Tạo">
                <Input
                  value={selectedRowData.hoTen}
                  onChange={e => updateEditValue('hoTen', e.target.value)}
                />
              </Form.Item>
            </Form>
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
                value={moment(editMeeting.createdAt)}
                onChange={date => updateEditValue('createdAt', date.format())}
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
                      <Input value={record.hoTen} onChange={e => {}} />
                    ),
                  },
                  {
                    title: 'Ngày sinh',
                    dataIndex: 'birthdate',
                    key: 'birthdate',
                    render: (_, record, index) => (
                      <Input value={record.namSinh} onChange={e => {}} />
                    ),
                  },
                  {
                    title: 'Giới tính',
                    dataIndex: 'gioiTinh',
                    key: 'gioiTinh',
                    render: (_, record, index) => (
                      <Input value={record.gioiTinh} onChange={e => {}} />
                    ),
                  },
                  {
                    title: 'Hành động',
                    dataIndex: 'action',
                    key: 'action',
                    render: (_, record, index) => (
                      <Button
                        type="link"
                        // onClick=({})
                      >
                        Xóa
                      </Button>
                    ),
                  },
                ]}
              />
              <Button
                type="dashed"
                // onClick={}
                style={{ marginTop: '10px' }}>
                Thêm người tham gia
              </Button>
            </Form.Item>
          </div>
        )}

        <div>
          <Button
            // onClick={}
            style={{ marginTop: '10px' }}>
            Sửa Nhóm
          </Button>
          <Button
            // onClick={}
            style={{ marginTop: '10px' }}>
            Xóa Nhóm
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Meeting;

// Code này chứa cả search theo từng cột mà tui cop được ở chat gpt, nhưng chưa hiểu vsao search chung k hoạt động nên cứ đẻ đây:v
// import React, { useState } from 'react';
// import { Table, Input, Modal } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// const { Search } = Input;
// const data = [
//   {
//     key: '1',
//     meetingCode: 'ABC123',
//     creator: 'Thua Cay',
//     content: 'Trông rất quen mà anh không nhớ đến đây bao giờ',
//     createdAt: '2022-06-10',
//     place: 'Điểm đến cuối cùng',
//     nguoiThamGia: [
//       {
//         id:'1',
//         hoTen: 'Trước khi em tồn tại',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//       {
//         id:'2',
//         hoTen: 'Sober Song',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//       {
//         id:'3',
//         hoTen: 'Xin lỗi',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//     ]
//   },
//   {
//     key: '2',
//     meetingCode: 'DEF456',
//     creator: 'Katarina du couteau',
//     content: 'Ám sát vua J3',
//     createdAt: '2022-06-12',
//     place: 'Trà đá hồ gươm',
//     nguoiThamGia: [
//       {
//         id:'1',
//         hoTen: 'Trước khi em tồn tại',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//       {
//         id:'2',
//         hoTen: 'Sober Song',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//       {
//         id:'3',
//         hoTen: 'Xin lỗi',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//     ],
//   },
//   {
//     key: '3',
//     meetingCode: 'GHI789',
//     creator: 'Ayame Nakiri',
//     content: 'Docchi Docchi Yodayo Ojou-sama',
//     createdAt: '2022-06-08',
//     place: 'Hóa ra em ở đây',
//     nguoiThamGia: [
//       {
//         id:'1',
//         hoTen: 'Trước khi em tồn tại',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//       {
//         id:'2',
//         hoTen: 'Sober Song',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//       {
//         id:'3',
//         hoTen: 'Xin lỗi',
//         namSinh:'01/02/2002',
//         gioiTinh:'Nam',
//       },
//     ],
//   },
// ];
// const Meeting = () => {

//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText('');
//   };

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div style={{ padding: 8 }}>
//         <Search
//           placeholder={`Tìm kiếm ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onSearch={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{ width: 188, marginBottom: 8, display: 'block' }}
//         />
//         <button type="button" onClick={() => handleReset(clearFilters)} style={{ width: 90, marginRight: 8 }}>
//           Reset
//         </button>
//         <button type="button" onClick={() => confirm()} style={{ width: 90 }}>
//           Filter
//         </button>
//       </div>
//     ),
//     filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
//     onFilter: (value, record) => {
//       const columnData = record[dataIndex].toString().toLowerCase();
//       return columnData.includes(value.toLowerCase());
//     },
//   });

//   const columns = [
//     {
//       title: 'Mã cuộc họp',
//       dataIndex: 'meetingCode',
//       sorter: (a, b) => a.meetingCode.localeCompare(b.meetingCode),
//       sortDirections: ['ascend', 'descend'],
//       // ...getColumnSearchProps('meetingCode'),
//     },
//     {
//       title: 'Người tạo',
//       dataIndex: 'creator',
//     },
//     {
//       title: 'Nội dung chính',
//       dataIndex: 'content',
//     },
//     {
//       title: 'Ngày tạo',
//       dataIndex: 'createdAt',
//       sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
//       sortDirections: ['ascend', 'descend'],
//     },
//   ];

//   const onChange = (pagination, filters, sorter, extra) => {
//     console.log('params', pagination, filters, sorter, extra);
//   };

//   const filteredData = searchText
//     ? data.filter((record) =>
//         Object.keys(record).some((key) =>
//           record[key].toString().toLowerCase().includes(searchText.toLowerCase())
//         )
//       )
//     : data;
//     const handleRowClick = (record) => {
//           setSelectedRowData(record);
//           setIsModalVisible(true);
//         };

//         const handleModalClose = () => {
//           setIsModalVisible(false);
//         };

//   return (
//     <div>
//       <Search
//         placeholder="Tìm kiếm"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         style={{ width: 200, marginBottom: 16 }}
//       />
//       <Table columns={columns} dataSource={data} onRow={(record) => ({ onClick: () => handleRowClick(record) })} />
//       <Modal
//         title="Thông tin cuộc họp"
//         visible={isModalVisible}
//         onCancel={handleModalClose}
//         footer={null}
//       >
//         {selectedRowData && (
//           <div>
//             <p>
//               <strong>Mã cuộc họp:</strong> {selectedRowData.meetingCode}
//             </p>
//             <p>
//               <strong>Người tạo:</strong> {selectedRowData.creator}
//             </p>
//             <p>
//               <strong>Nội dung:</strong> {selectedRowData.content}
//             </p>
//             <p>
//               <strong>Ngày tạo:</strong> {selectedRowData.createdAt}
//             </p>
//             <p>
//               <strong>Địa điểm:</strong> {selectedRowData.place}
//             </p>
//             <p>
//               <strong>Người tham gia:</strong>
//             </p>
//             <Table
//               columns={[
//                 {
//                   title: 'Tên',
//                   dataIndex: 'hoTen',
//                   key: 'hoTen',
//                 },
//                 {
//                   title: 'Ngày sinh',
//                   dataIndex: 'namSinh',
//                   key: 'namSinh',
//                 },
//                 {
//                   title: 'Giới tính',
//                   dataIndex: 'gioiTinh',
//                   key: 'gioiTinh',
//                 },
//               ]}
//               dataSource={selectedRowData.nguoiThamGia}
//               pagination={false}
//             />
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Meeting;
