import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import ModalForm from './ModalForm';
const data = [
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    gender: 'female',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    gender: 'male',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    gender: 'female',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    gender: 'male',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];
const Resident = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
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
      onCell: record => {
        return {
          onClick: () => {
            // Thực hiện hành động khi bấm vào tên
            <ModalForm form={'<Create_Form />'} title="Creat your teams" />;
            // Gọi hàm khác hoặc thực hiện các thao tác khác tại đây
          },
        };
      },
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
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
      sorter: (a, b) => a.age - b.age,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};
export default Resident;
