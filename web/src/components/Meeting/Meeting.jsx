

import React, { useState } from 'react';
import { Table, Input, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

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

const Meeting = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleRowClick = (record) => {
    setSelectedRowData(record);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Mã cuộc họp',
      dataIndex: 'meetingCode',
      sorter: (a, b) => a.meetingCode.localeCompare(b.meetingCode),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Người tạo',
      dataIndex: 'creator',
    },
    {
      title: 'Nội dung chính',
      dataIndex: 'content',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      sortDirections: ['ascend', 'descend'],
    },
  ];

  const filteredData = searchText
    ? data.filter((record) =>
        columns.some((column) =>
          record[column.dataIndex].toString().toLowerCase().includes(searchText.toLowerCase())
        )
      )
    : data;

  return (
    <div>
      <Search
        placeholder="Tìm kiếm"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        onRow={(record) => ({ onClick: () => handleRowClick(record) })}
      />
      <Modal title="Thông tin cuộc họp" visible={isModalVisible} onCancel={handleModalClose} footer={null}>
        {selectedRowData && (
          <div>
            <p>
              <strong>Mã cuộc họp:</strong> {selectedRowData.meetingCode}
            </p>
            <p>
              <strong>Người tạo:</strong> {selectedRowData.creator}
            </p>
            <p>
              <strong>Nội dung:</strong> {selectedRowData.content}
            </p>
            <p>
              <strong>Ngày tạo:</strong> {selectedRowData.createdAt}
            </p>
            <p>
              <strong>Địa điểm:</strong> {selectedRowData.place}
            </p>
            <p>
              <strong>Người tham gia:</strong>
            </p>
            <Table
              columns={[
                {
                  title: 'Tên',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Ngày sinh',
                  dataIndex: 'birthdate',
                  key: 'birthdate',
                },
                {
                  title: 'Giới tính',
                  dataIndex: 'gender',
                  key: 'gender',
                },
              ]}
              dataSource={selectedRowData.participants}
              pagination={false}
            />
          </div>
        )}
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
//     participants: [
//       {
//         id:'1',
//         name: 'Trước khi em tồn tại',
//         birthdate:'01/02/2002',
//         gender:'Nam',
//       },  
//       {
//         id:'2',
//         name: 'Sober Song',
//         birthdate:'01/02/2002',
//         gender:'Nam',
//       }, 
//       {
//         id:'3',
//         name: 'Xin lỗi',
//         birthdate:'01/02/2002',
//         gender:'Nam',
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
//     participants: [
//       {
//         id:'1',
//         name: 'Trước khi em tồn tại',
//         birthdate:'01/02/2002',
//         gender:'Nam',
//       },  
//       {
//         id:'2',
//         name: 'Sober Song',
//         birthdate:'01/02/2002',
//         gender:'Nam',
//       }, 
//       {
//         id:'3',
//         name: 'Xin lỗi',
//         birthdate:'01/02/2002',
//         gender:'Nam',
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
//     participants: [
//       {
//         id:'1',
//         name: 'Trước khi em tồn tại',
//         birthdate:'01/02/2002',
//         gender:'Nam',
//       },  
//       {
//         id:'2',
//         name: 'Sober Song',
//         birthdate:'01/02/2002',
//         gender:'Nam',
//       }, 
//       {
//         id:'3',
//         name: 'Xin lỗi',
//         birthdate:'01/02/2002',
//         gender:'Nam',
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
//                   dataIndex: 'name',
//                   key: 'name',
//                 },
//                 {
//                   title: 'Ngày sinh',
//                   dataIndex: 'birthdate',
//                   key: 'birthdate',
//                 },
//                 {
//                   title: 'Giới tính',
//                   dataIndex: 'gender',
//                   key: 'gender',
//                 },
//               ]}
//               dataSource={selectedRowData.participants}
//               pagination={false}
//             />
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Meeting;