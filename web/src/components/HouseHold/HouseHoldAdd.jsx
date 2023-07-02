import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal, Select, AutoComplete, DatePicker } from 'antd';
import axios from 'axios';

const { Option } = Select;

const HouseHoldAdd = () => {
    // State hooks
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [selectedChuHo, setSelectedChuHo] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [memberFormItems, setMemberFormItems] = useState([]);
    const [residents, setResidents] = useState([]);

    // Fetch residents data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4001/api/resident/');
                if (response.status === 200) {
                    const resData = response.data.map((e) => {
                        e['key'] = e['ID'];
                        return e;
                    });
                    setResidents(resData);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    // Other functions
    const handleSearch = (value) => {
        setSearchText(value);
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
    };

    const handleSelectChuHo = (record) => {
        setSelectedChuHo(record);
    };

    const handleSubmit = (values) => {
        const { chuHo, household } = values;
        const members = household.members.map((member) => ({
            maHoKhau: household.maHoKhau,
            idNhanKhau: residents.find((resident) => resident.hoTen === member.hoten).idNhanKhau,
            quanHeVoiChuHo: member.quanhe,
        }));

        const newHousehold = {
            maHoKhau: household.maHoKhau,
            idChuHo: residents.find((resident) => resident.hoTen === chuHo).idNhanKhau,
            diaChi: household.diaChi,
            ngayLap: household.ngayLap ? household.ngayLap.format('YYYY-MM-DD') : null,
            thanhVien: members,
        };

        const requestData = newHousehold;

        axios
            .post('http://localhost:4001/api/household/', requestData)
            .then((response) => {
                console.log('Form values:', values);
                console.log('Response:', response.data);
                // Handle success or display a success message
                const { householdId } = response.data;
                const memberData = members.map((member) => [
                    member.idNhanKhau,
                    householdId,
                    member.quanHeVoiChuHo,
                ]);

                // Further processing or handling of the response
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error or display an error message
            });
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
                <Form.Item
                    style={{ width: '500px', marginRight: 8 }}
                    name={['household', 'members', memberFormItems.length, 'hoten']}
                    label="Họ tên"
                    rules={[
                        { required: true, message: 'Vui lòng nhập họ tên' },
                        {
                            validator: (_, value) => {
                                const exists = residents.some((member) => member.hoTen === value);
                                if (exists) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Không tìm thấy họ tên trong danh sách'));
                            },
                        },
                    ]}
                >
                    <AutoComplete
                        options={residents.map((member) => ({ value: member.hoTen }))}
                        placeholder="Nhập họ tên"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </Form.Item>
                <Form.Item
                    style={{ width: '200px', marginRight: 8 }}
                    name={['household', 'members', memberFormItems.length, 'quanhe']}
                    label="Quan hệ"
                    rules={[{ required: true, message: 'Vui lòng nhập quan hệ' }]}
                >
                    <Select placeholder="Chọn quan hệ">
                        <Option value="Con">Con</Option>
                        <Option value="Vợ">Vợ</Option>
                        <Option value="Chồng">Chồng</Option>
                        <Option value="Bố">Bố</Option>
                        <Option value="Mẹ">Mẹ</Option>
                        <Option value="Ông">Ông</Option>
                        <Option value="Bà">Bà</Option>
                    </Select>
                </Form.Item>
                {memberFormItems.length > 0 && (
                    <Button
                        type="primary"
                        danger
                        onClick={() => handleRemoveMemberFormItem(memberFormItems.length)}
                        style={{ marginTop: '32px' }}
                    >
                        Xóa
                    </Button>
                )}
            </div>
        );
        setMemberFormItems((prevItems) => [...prevItems, memberFormItem]);
    };

    return (
        <div>
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
                <Form.Item name="maHoKhau" label="Mã hộ khẩu" rules={[{ required: true, message: 'Vui lòng nhập mã hộ khẩu' }]}>
                    <Input placeholder="Nhập mã hộ khẩu" />
                </Form.Item>
                <Form.Item name="diaChi" label="Địa chỉ" rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}>
                    <Input placeholder="Nhập địa chỉ" />
                </Form.Item>
                <Form.Item name="ngayLap" label="Ngày lập" rules={[{ required: true, message: 'Vui lòng chọn ngày lập' }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="chuHo" label="Chủ hộ" rules={[{ required: true, message: 'Vui lòng chọn chủ hộ' }]}>
                    <Select
                        showSearch
                        placeholder="Tìm kiếm chủ hộ"
                        optionFilterProp="children"
                        onSearch={handleSearch}
                        onSelect={handleSelectChuHo}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        {residents.map((member) => (
                            <Option key={member.idNhanKhau} value={member.hoTen}>
                                {member.hoTen}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Thành viên trong hộ" style={{ marginBottom: 0 }}>
                    {memberFormItems}
                </Form.Item>
                <Form.Item>
                    <Button type="dashed" onClick={handleAddMemberFormItem} style={{ width: '60%' }}>
                        Thêm thành viên
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default HouseHoldAdd;
