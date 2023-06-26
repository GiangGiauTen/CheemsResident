import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Modal } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '1',
    name: 'Nguyễn Văn A',
    gender: 'male',
    birthDay: '14/05/1990',
    homeTown: 'Hanoi',
    dantoc: 'Kinh',
    national: 'VietNam',
    soCMt: '123456789',
    tieuSu: [
      {
        tuNgay: '01/02/2002',
        denNgay: '01/02/2022',
        address: '443 Trường Chinh, Hà Nội',
        workPlace: 'Sami',
      },
    ],
  },
  {
    key: '2',
    name: 'Trần Thị B',
    gender: 'female',
    birthDay: '22/09/1993',
    homeTown: 'Ho Chi Minh City',
    dantoc: 'Tây Ban Nha',
    national: 'United States',
    soCMt: '987654321',
    tieuSu: [
      {
        tuNgay: '05/03/2010',
        denNgay: '10/12/2021',
        address: '789 Nguyễn Văn Linh, TP.HCM',
        workPlace: 'ABC Corporation',
      },
    ],
  },
  {
    key: '3',
    name: 'Lê Văn C',
    gender: 'male',
    birthDay: '10/12/1978',
    homeTown: 'Da Nang',
    dantoc: 'Anglo-Saxon',
    national: 'United Kingdom',
    soCMt: '654321987',
    tieuSu: [
      {
        tuNgay: '10/08/2000',
        denNgay: '01/01/2022',
        address: '123 Nguyễn Chí Thanh, Đà Nẵng',
        workPlace: 'XYZ Company',
      },
    ],
  },
  {
    key: '4',
    name: 'Phạm Thị D',
    gender: 'female',
    birthDay: '05/07/1989',
    homeTown: 'Hue',
    dantoc: 'Pháp',
    national: 'France',
    soCMt: '789456123',
    tieuSu: [
      {
        tuNgay: '01/06/2012',
        denNgay: '01/12/2021',
        address: '456 Trần Phú, Huế',
        workPlace: 'DEF Corporation',
      },
    ],
  },
  {
    key: '5',
    name: 'Nguyễn Văn E',
    gender: 'male',
    birthDay: '17/03/1992',
    homeTown: 'Nha Trang',
    dantoc: 'Ả Rập',
    national: 'United Arab Emirates',
    soCMt: '456789123',
    tieuSu: [
      {
        tuNgay: '01/09/2015',
        denNgay: '15/12/2020',
        address: '789 Trần Hưng Đạo, Nha Trang',
        workPlace: 'GHI Company',
      },
    ],
  },
  {
    key: '6',
    name: 'Trần Thị F',
    gender: 'female',
    birthDay: '29/11/1994',
    homeTown: 'Hoi An',
    dantoc: 'Australia',
    national: 'Australia',
    soCMt: '321654987',
    tieuSu: [
      {
        tuNgay: '01/12/2010',
        denNgay: '01/09/2021',
        address: '987 Lý Thường Kiệt, Hội An',
        workPlace: 'JKL Corporation',
      },
    ],
  },
  {
    key: '7',
    name: 'Phan Văn G',
    gender: 'male',
    birthDay: '18/08/1987',
    homeTown: 'Ha Long',
    dantoc: 'Ai Cập',
    national: 'Egypt',
    soCMt: '852963741',
    tieuSu: [
      {
        tuNgay: '10/05/2004',
        denNgay: '01/03/2022',
        address: '369 Quang Trung, Hạ Long',
        workPlace: 'MNO Corporation',
      },
    ],
  },
  {
    key: '8',
    name: 'Đặng Thị H',
    gender: 'female',
    birthDay: '07/02/1989',
    homeTown: 'Vung Tau',
    dantoc: 'Hán',
    national: 'China',
    soCMt: '369258147',
    tieuSu: [
      {
        tuNgay: '01/01/2008',
        denNgay: '01/10/2021',
        address: '147 Nguyễn An Ninh, Vũng Tàu',
        workPlace: 'PQR Corporation',
      },
    ],
  },
  {
    key: '9',
    name: 'Nguyễn Thị I',
    gender: 'female',
    birthDay: '25/06/1991',
    homeTown: 'Sapa',
    dantoc: 'Ý',
    national: 'Italy',
    soCMt: '147852369',
    tieuSu: [
      {
        tuNgay: '01/03/2010',
        denNgay: '01/11/2021',
        address: '258 Cầu Mây, Sa Pa',
        workPlace: 'STU Company',
      },
    ],
  },
  {
    key: '10',
    name: 'Lê Văn J',
    gender: 'male',
    birthDay: '02/11/1995',
    homeTown: 'Hai Phong',
    dantoc: 'Đức',
    national: 'Germany',
    soCMt: '963852741',
    tieuSu: [
      {
        tuNgay: '01/09/2015',
        denNgay: '01/01/2022',
        address: '741 Lạch Tray, Hải Phòng',
        workPlace: 'VWX Corporation',
      },
    ],
  },
  {
    key: '11',
    name: 'Trần Văn K',
    gender: 'male',
    birthDay: '09/04/1986',
    homeTown: 'Can Tho',
    dantoc: 'Tây Ban Nha',
    national: 'Spain',
    soCMt: '741852963',
    tieuSu: [
      {
        tuNgay: '01/04/2012',
        denNgay: '01/02/2022',
        address: '852 Cách Mạng Tháng 8, Cần Thơ',
        workPlace: 'YZX Corporation',
      },
    ],
  },
  {
    key: '12',
    name: 'Nguyễn Thị L',
    gender: 'female',
    birthDay: '12/07/1990',
    homeTown: 'Dalat',
    dantoc: 'Ấn Độ',
    national: 'India',
    soCMt: '258963147',
    tieuSu: [
      {
        tuNgay: '01/06/2010',
        denNgay: '01/03/2022',
        address: '963 Phan Đình Phùng, Đà Lạt',
        workPlace: 'XYZ Company',
      },
    ],
  },
];
const Resident = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const [modalName, setModalName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const searchInput = useRef(null);
  // Hàm xử lý khi người dùng nhấn nút "Sửa"
  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  const handleRowClick = record => {
    setSelectedRowData(record);
    setIsModalVisible(true);
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={e => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}>
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}>
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}>
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => {
          if (searchInput.current) {
            searchInput.current.select();
          }
        }, 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
      width: '10%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
      render: (_, record, index) => (
        <div
          onClick={() => {
            setModalName(record.name);
          }}>
          {record.name}
        </div>
        // <Button type="link" onClick={() => console.log(record.name)}>
        //   ok
        // </Button>
      ),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        {
          text: 'Male',
          value: 'male',
        },
        {
          text: 'Female',
          value: 'female',
        },
      ],
      onFilter: (value, record) => record.gender.startsWith(value),
      filterSearch: true,
      width: '20%',
    },
    {
      title: 'Birth Day',
      dataIndex: 'birthDay',
      key: 'birthDay',
      width: '20%',
      ...getColumnSearchProps('birthDay'),

      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'homeTown',
      dataIndex: 'homeTown',
      key: 'homeTown',
      ...getColumnSearchProps('homeTown'),
      sorter: (a, b) => a.homeTown.length - b.homeTown.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onRow={record => ({ onClick: () => handleRowClick(record) })}
      />
      <Modal
        title="Thông tin cơ bản"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <div>
            <p>
              <strong>Họ tên:</strong> {selectedRowData.name}
            </p>
            <p>
              <strong>Năm sinh:</strong> {selectedRowData.age}
            </p>
            <p>
              <strong>Giới tính:</strong> {selectedRowData.gender}
            </p>
            <p>
              <strong>Nguyên quán:</strong> {selectedRowData.homeTown}
            </p>
            <p>
              <strong>Dân tộc:</strong> {selectedRowData.dantoc}
            </p>
            <p>
              <strong>Tôn giáo:</strong>
            </p>
            <p>
              <strong>Quốc tịch:</strong>
              {selectedRowData.national}
            </p>
            <p>
              <strong>Số CMT:</strong>
              {selectedRowData.soCMt}
            </p>
            <Table
              columns={[
                {
                  title: 'Từ Ngày',
                  dataIndex: 'tuNgay',
                  key: 'tuNgay',
                },
                {
                  title: 'Đến Ngày',
                  dataIndex: 'denNgay',
                  key: 'denNgay',
                },
                {
                  title: 'Địa chỉ',
                  dataIndex: 'address',
                  key: 'address',
                },
                {
                  title: 'Nơi làm việc',
                  dataIndex: 'workPlace',
                  key: 'workPlace',
                },
              ]}
              dataSource={selectedRowData.tieuSu}
              pagination={false}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};
export default Resident;
