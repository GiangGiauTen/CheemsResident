import React from "react";
import { Button, Input, Modal, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const data = [
  {
    hokhauId: 'TQB003',
    hokhauChuHo: 'Nguyễn Văn A',
    hokhauDiaChi: 'Số 1, đường 1, phường 1, quận 1, TP.HCM',
    hokhauNgaylap: '01/01/2021',
    lanthamgiahop: 2,
    danhsachthanhvien: [
      {
        id: 1,
        hoten: 'Nguyễn Văn A',
        ngaysinh: '01/01/1990',
        gioitinh: 'Nam',
        quanhe: 'Chủ hộ',
      },
      {
        id: 2,
        hoten: 'Nguyễn Thị B',
        ngaysinh: '01/01/1990',
        gioitinh: 'Nữ',
        quanhe: 'Vợ',
      },
      {
        id: 3,
        hoten: 'Nguyễn Văn C',
        ngaysinh: '01/01/1990',
        gioitinh: 'Nam',
        quanhe: 'Con',
      }
    ]
  },
  {
    hokhauId: 'TQB004',
    hokhauChuHo: 'Nguyễn Văn B',
    hokhauDiaChi: 'Số 2, đường 2, phường 2, quận 2, TP.HCM',
    hokhauNgaylap: '01/01/2021',
    lanthamgiahop: 3,
    danhsachthanhvien: [
      {
        id: 4,
        hoten: 'Nguyễn Văn B',
        ngaysinh: '01/01/1990',
        gioitinh: 'Nam',
        quanhe: 'Chủ hộ',
      },
      {
        id: 5,
        hoten: 'Nguyễn Thị C',
        ngaysinh: '01/01/1990',
        gioitinh: 'Nữ',
        quanhe: 'Vợ',
      },
      {
        id: 6,
        hoten: 'Nguyễn Văn D',
        ngaysinh: '01/01/1990',
        gioitinh: 'Nam',
        quanhe: 'Con',
      },
      {
        id: 7,
        hoten: 'Nguyễn Văn E',
        ngaysinh: '01/01/1990',
        gioitinh: 'Nam',
        quanhe: 'Con',
      }
    ]
  }
];


function HouseHold() {
  const [searchText, setSearchText] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Return table with columns that are hokhauid, hokhauChuHo, hokhauDiaChi
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
      title: 'Hộ khẩu ID',
      dataIndex: 'hokhauId',
      key: 'hokhauId',
    },
    {
      title: 'Chủ hộ',
      dataIndex: 'hokhauChuHo',
      key: 'hokhauChuHo',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'hokhauDiaChi',
      key: 'hokhauDiaChi',
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
      <Modal title="Chi tiết hộ khẩu" visible={isModalVisible} onCancel={handleModalClose} footer={null}>
        {selectedRowData && (
          <div>
            <p>
              <strong>Hộ khẩu ID: </strong> {selectedRowData.hokhauId}
            </p>
            <p>
              <strong>Chủ hộ: </strong> {selectedRowData.hokhauChuHo}
            </p>
            <p>
              <strong>Địa chỉ: </strong> {selectedRowData.hokhauDiaChi}
            </p>
            <p>
              <strong>Ngày lập: </strong> {selectedRowData.hokhauNgaylap}
            </p>
            <p>
              <strong>Lần tham gia họp: </strong> {selectedRowData.lanthamgiahop}
            </p>
            <p>
              <strong>Danh sách thành viên: </strong>
            </p>
            <Table
              columns={[
                {
                  title: 'ID',
                  dataIndex: 'id',
                  key: 'id',
                },
                {
                  title: 'Họ tên',
                  dataIndex: 'hoten',
                  key: 'hoten',
                },
                {
                  title: 'Ngày sinh',
                  dataIndex: 'ngaysinh',
                  key: 'ngaysinh',
                },
                {
                  title: 'Giới tính',
                  dataIndex: 'gioitinh',
                  key: 'gioitinh',
                },
                {
                  title: 'Quan hệ',
                  dataIndex: 'quanhe',
                  key: 'quanhe',
                },
              ]}
              dataSource={selectedRowData.danhsachthanhvien}
              pagination={false}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default HouseHold;
