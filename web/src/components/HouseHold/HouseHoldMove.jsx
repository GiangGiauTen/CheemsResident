import React from 'react';
import { Button, Input, Modal, Space, Table } from 'antd';
import { useRef, useState } from 'react';

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


const HouseHoldMove = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const handleSearch = (value) => {
        setSearchText(value);
    };

    const handleRowClick = (record) => {
        setSelectedRowData(record);
    };

    const handleFormSubmit = () => {
        // Handle form submission logic here
        // You can access the selectedRowData, addressChange, and reason values
        // and perform necessary operations like API calls or data manipulation
        // console.log('Selected Row Data:', selectedRowData);
        // console.log('Address Change:', addressChange);
        // console.log('Reason:', reason);
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
                style={{ width: 400, marginBottom: 16 }}
            />
            <div style={{ display: 'flex', marginBottom: 16 }}>
                <div style={{ width: 600, marginBottom: 16 }}>
                    <Table
                        columns={columns}
                        dataSource={filteredData}
                        onRow={(record) => ({
                            onClick: () => handleRowClick(record),
                            style: { background: selectedRowData === record ? '#e6f7ff' : 'transparent' },
                        })}
                        scroll={{ y: 600 }}
                    />
                </div>
                {selectedRowData && (
                    <div style={{ width: 800, marginBottom: 16 }}>
                        <p>Mã hộ khẩu: {selectedRowData.hokhauId}</p>
                        <p>Tên chủ hộ: {selectedRowData.hokhauChuHo}</p>
                        <p>Mã khu vực: {selectedRowData.hokhauMaKhuVuc}</p>
                        <p>Địa chỉ hiện tại: {selectedRowData.hokhauDiaChi}</p>
                        <Input
                            placeholder="Địa chỉ chuyển đến"
                            style={{ marginBottom: 16 }}
                        />
                        <Input
                            placeholder="Lý do chuyển đi"
                            style={{ marginBottom: 16 }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button type="primary" onClick={handleFormSubmit}>
                                Submit
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HouseHoldMove;
