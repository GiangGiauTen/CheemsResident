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
      // sorter: (a, b) => a.meetingCode.localeCompare(b.meetingCode),
      // sortDirections: ['ascend', 'descend'],
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
