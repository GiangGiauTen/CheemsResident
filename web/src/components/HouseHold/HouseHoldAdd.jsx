import React, { useState } from 'react';
import { Form, Input, Button, Table, Modal, Select, AutoComplete } from 'antd';

const { Search } = Input;

const { Option } = Select;

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

const moreData = [
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
    },
    {
        id: 6,
        hoten: 'Nguyễn Văn F',
        ngaysinh: '06/06/1990',
        gioitinh: 'Nam',
        quanhe: null,
    },
    {
        id: 7,
        hoten: 'Nguyễn Thị G',
        ngaysinh: '07/07/1990',
        gioitinh: 'Nữ',
        quanhe: null,
    },
    {
        id: 8,
        hoten: 'Nguyễn Văn H',
        ngaysinh: '08/08/1990',
        gioitinh: 'Nam',
        quanhe: null,
    },
];



const HouseHoldAdd = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedChuHo, setSelectedChuHo] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [memberFormItems, setMemberFormItems] = useState([]);


    const handleSearch = (value) => {
        setSearchText(value);
        // const filteredData = moreData.filter((member) =>
        //     member.hoten.toLowerCase().includes(value.toLowerCase())
        // );
        // setSearchedData(filteredData);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
    };

    const handleSelectChuHo = (record) => {
        setSelectedChuHo(record);
    };

    const handleSubmit = (values) => {
        console.log('Form values:', values);
    };

    const handleConfirmSelection = () => {
        if (selectedChuHo) {
            setIsModalVisible(false);
        }
    };

    const handleRemoveMemberFormItem = (index) => {
        setMemberFormItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const handleAddMemberFormItem = () => {
        const memberFormItem = (
            <div key={memberFormItems.length} style={{ display: 'flex', marginBottom: 8 }}>
                <Form.Item style={{ width: '500px', marginRight: 8 }}
                    name={['household', 'members', memberFormItems.length, 'hoten']}
                    label="Họ tên"
                    rules={[
                        { required: true, message: 'Vui lòng nhập họ tên' },
                        {
                            validator: (_, value) => {
                                const exists = moreData.some((member) => member.hoten === value);
                                if (exists) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Không tìm thấy họ tên trong danh sách'));
                            },
                        },
                    ]}
                >
                    <AutoComplete
                        options={moreData.map((member) => ({ value: member.hoten }))}
                        placeholder="Nhập họ tên"
                    />
                </Form.Item>
                <Form.Item
                    name={['household', 'members', memberFormItems.length, 'quanhevoichuho']}
                    label="Quan hệ với chủ hộ"
                    rules={[{ required: true, message: 'Vui lòng chọn quan hệ' }]}
                    style={{ marginRight: 8 }}
                >
                    <Select placeholder="Chọn quan hệ">
                        <Option value="Chủ hộ">Chủ hộ</Option>
                        <Option value="Vợ">Vợ</Option>
                        <Option value="Con">Con</Option>
                        <Option value="Khác">Khác</Option>
                    </Select>
                </Form.Item>
                {moreData.length > memberFormItems.length && (
                    <Button type="link" onClick={() => handleRemoveMemberFormItem(memberFormItems.length)}>
                        Remove
                    </Button>
                )}
            </div>
        );
        setMemberFormItems((prevItems) => [...prevItems, memberFormItem]);
    };



    const columns = [
        {
            title: 'Họ tên',
            dataIndex: 'hoten',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'ngaysinh',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gioitinh',
        },
        {
            title: 'Quan hệ với chủ hộ',
            dataIndex: 'quanhe',
        },
    ];

    const searchedData = moreData.filter((member) =>
        member.hoten.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <h1>Thêm hộ khẩu</h1>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    name={['household', 'mahoKhau']}
                    label="Mã hộ khẩu"
                    rules={[{ required: true, message: 'Vui lòng nhập mã hộ khẩu' }]}
                >
                    <Input placeholder="Nhập mã hộ khẩu" />
                </Form.Item>

                <Form.Item
                    name={['household', 'makhuVuc']}
                    label="Mã khu vực"
                    rules={[{ required: true, message: 'Vui lòng nhập mã khu vực' }]}
                >
                    <Input placeholder="Nhập mã khu vực" />
                </Form.Item>

                <Form.Item
                    name={['household', 'diachi']}
                    label="Địa chỉ"
                    rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                >
                    <Input placeholder="Nhập địa chỉ" />
                </Form.Item>

                <Form.Item name={['household', 'chuHo']} label="Chủ hộ">
                    <div style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>
                        {selectedChuHo ? (
                            <div>
                                <div>{selectedChuHo.hoten}</div>
                                <div>Ngày sinh: {selectedChuHo.ngaysinh}</div>
                                <div>ID: {selectedChuHo.id}</div>
                            </div>
                        ) : (
                            <Button type="link" onClick={showModal}>
                                Chọn chủ hộ
                            </Button>
                        )}
                    </div>
                </Form.Item>

                {memberFormItems}
                <Button type="dashed" onClick={handleAddMemberFormItem} style={{ marginBottom: 16 }}>
                    Thêm thành viên
                </Button>

                <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form.Item>
            </Form>

            <Modal
                title="Chọn chủ hộ"
                visible={isModalVisible}
                onCancel={handleModalCancel}
                footer={[
                    <Button key="back" onClick={handleModalCancel}>
                        Hủy
                    </Button>,
                    <Button key="select" type="primary" onClick={handleConfirmSelection} disabled={!selectedChuHo}>
                        Chọn
                    </Button>,
                ]}
                width={800}
            >
                <Search
                    placeholder="Tìm kiếm"
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ marginBottom: 16 }}
                />

                <Table
                    dataSource={searchedData}
                    columns={columns}
                    pagination={false}
                    rowKey="id"
                    onRow={(record) => ({
                        onClick: () => handleSelectChuHo(record),
                    })}
                />
            </Modal>
        </div>
    );
};

export default HouseHoldAdd;