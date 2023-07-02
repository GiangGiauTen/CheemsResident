import React from "react";
import { Button, Input, Modal, Space, Table } from 'antd';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const { Search } = Input;

const data = [
  {
    ID: 14,
    maHoKhau: 'TQB001',
    idChuHo: 26,
    maKhuVuc: 'HN03',
    diaChi: 'Số 1 Tạ Quang Bửu, quận Hai Bà Trưng, Hà Nội',
    ngayLap: '2019-12-07T17:00:00.000Z',
    ngayChuyenDi: null,
    lyDoChuyen: null,
    nguoiThucHien: null,
    householdMembers: [
      {
        idNhanKhau: 26,
        quanHeVoiChuHo: 'Chủ hộ',
      }
    ]
  },
  // Other data objects...
];


function HouseHold() {
  const [searchText, setSearchText] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Return table with columns that are maHoKhau, idChuHo, diaChi
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/resident/');
        if (response.status === 200) {
          const resData = response.data.map(e => {
            e['key'] = e['ID'];
            e['ngayLap'] = (new Date(e['ngayLap'])).toLocaleDateString('vi-VN');
            return e;
          });
          // setResidentData(resData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Mã hộ khẩu',
      dataIndex: 'maHoKhau',
      key: 'maHoKhau',
    },
    {
      title: 'Chủ hộ',
      dataIndex: 'idChuHo',
      key: 'idChuHo',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'diaChi',
      key: 'diaChi',
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
              <strong>Mã hộ khẩu: </strong> {selectedRowData.maHoKhau}
            </p>
            <p>
              <strong>Chủ hộ: </strong> {selectedRowData.idChuHo}
            </p>
            <p>
              <strong>Địa chỉ: </strong> {selectedRowData.diaChi}
            </p>
            <p>
              <strong>Ngày lập: </strong> {selectedRowData.ngayLap}
            </p>
            <p>
              <strong>Thành viên trong hộ khẩu: </strong>
            </p>
            <Table
              columns={[
                {
                  title: 'ID',
                  dataIndex: 'idNhanKhau',
                  key: 'idNhanKhau',
                },
                {
                  title: 'Quan hệ với chủ hộ',
                  dataIndex: 'quanHeVoiChuHo',
                  key: 'quanHeVoiChuHo',
                },
              ]}
              dataSource={selectedRowData.householdMembers}
              pagination={false}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default HouseHold;
