import React from "react";
import { Button, Input, Modal, Space, Table } from 'antd';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const { Search } = Input;


function HouseHold() {
  const [searchText, setSearchText] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [householdData, setHouseholddata] = useState([]);
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
        const response = await axios.get('http://localhost:4001/api/household/');
        if (response.status === 200) {
          const resData = response.data.map(e => {
            e['key'] = e['ID'];
            e['ngayLap'] = (new Date(e['ngayLap'])).toLocaleDateString('vi-VN');
            return e;
          });
          setHouseholddata(resData);
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
      dataIndex: 'chuHo',
      key: 'chuHo',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'diaChi',
      key: 'diaChi',
    },
  ];
  const filteredData = searchText
    ? householdData.filter((record) =>
      columns.some((column) =>
        record[column.dataIndex].toString().toLowerCase().includes(searchText.toLowerCase())
      )
    )
    : householdData;
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
              <strong>Chủ hộ: </strong> {selectedRowData.chuHo}
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
                  title: 'Họ Tên',
                  dataIndex: 'hoTen',
                  key: 'hoTen',
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
