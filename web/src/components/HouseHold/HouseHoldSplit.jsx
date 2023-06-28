import React from 'react';
import { Button, Input, Table, Select } from 'antd';
import { useEffect, useState } from 'react';

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


const HouseHoldSplit = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [selectedMember, setSelectedMember] = useState(null);
    const [newMembers, setNewMembers] = useState([]);
    const [newMember, setNewMember] = useState(null);
    const [relationshipOptions, setRelationshipOptions] = useState([]);
    const [memberOptions, setMemberOptions] = useState([]);
    const [tableData, setTableData] = useState(data);
    const handleSearch = (value) => {
        setSearchText(value);
    };

    const handleRowClick = (record) => {
        setSelectedRowData(record);
    };
    const handleAddMember = () => {
        if (newMember) {
            setNewMembers((prevMembers) => [...prevMembers, newMember]);
            setSelectedMember(null); // Reset selectedMember after adding to newMembers
        }
    };
    const handleAddNewMember = () => {
        if (newMember) {
            const memberExists = newMembers.some((member) => member.id === newMember.id);

            if (!memberExists) {
                const selectedMember = memberOptions.find((member) => member.id === newMember.id);
                setNewMembers((prevMembers) => [...prevMembers, selectedMember]);
                setNewMember(null); // Reset newMember after adding to newMembers

                // Update the table's data with the new member
                setTableData((prevData) => {
                    const newData = prevData.map((record) => {
                        if (record.hokhauId === selectedRowData.hokhauId) {
                            return {
                                ...record,
                                danhsachthanhvien: [...record.danhsachthanhvien, selectedMember]
                            };
                        }
                        return record;
                    });
                    return newData;
                });
            }
        }
    };
    const handleRemoveMember = (memberId) => {
        setNewMembers((prevMembers) => prevMembers.filter((member) => member.id !== memberId));
    };


    const handleFormSubmit = () => {
        // Handle form submission logic here
        // You can access the selectedRowData, addressChange, and reason values
        // and perform necessary operations like API calls or data manipulation
        // console.log('Selected Row Data:', selectedRowData);
        // console.log('Address Change:', addressChange);
        // console.log('Reason:', reason);
    };

    useEffect(() => {
        if (selectedMember) {
            const memberExists = newMembers.some((member) => member.quanhe === 'Chủ hộ mới');
            if (memberExists) {
                // Update the existing chu ho moi in newMembers
                setNewMembers((prevMembers) =>
                    prevMembers.map((member) =>
                        member.quanhe === 'Chủ hộ mới' ? { ...selectedMember, quanhe: 'Chủ hộ mới' } : member
                    )
                );
            } else {
                // Add the selectedMember as chu ho moi to newMembers
                setNewMembers((prevMembers) => [...prevMembers, { ...selectedMember, quanhe: 'Chủ hộ mới' }]);
            }
        }
    }, [selectedMember]);


    // Update member options based on selectedRowData
    useEffect(() => {
        if (selectedRowData && selectedRowData.danhsachthanhvien) {
            const options = selectedRowData.danhsachthanhvien.map((member) => ({
                value: member.hoten,
                id: member.id,
                quanhe: member.quanhe,
                ngaysinh: member.ngaysinh,
            }));
            setMemberOptions(options);
        }
    }, [selectedRowData]);

    const handleRelationshipChange = (memberId, value) => {
        setNewMembers((prevMembers) =>
            prevMembers.map((member) =>
                member.id === memberId ? { ...member, quanhe: value } : member
            )
        );
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
                        <p>Chủ hộ hiện tại: {selectedRowData.hokhauChuHo}</p>
                        <p>Mã hộ khẩu: {selectedRowData.hokhauId}</p>
                        <p>Địa chỉ hiện tại: {selectedRowData.hokhauDiaChi}</p>
                        <div style={{}}>
                            <p>Mã khu vực: <Input /></p>
                        </div>
                        <div style={{}}>
                            <p>Địa chỉ mới: <Input /></p>
                        </div>
                        <div style={{}}>
                            <p>Mã hộ khẩu mới: <Input /></p>
                        </div>
                        <p>Chủ hộ mới</p>
                        <Select
                            placeholder="Chủ hộ mới"
                            style={{ marginBottom: 16, width: 400 }}
                            value={selectedMember ? selectedMember.id : undefined} // Use selectedMember.id for Select's value
                            onChange={(value) => {
                                const member = selectedRowData.danhsachthanhvien.find((member) => member.id === value);
                                setSelectedMember(member); // Update selectedMember with the selected value
                            }}
                        >
                            {selectedRowData.danhsachthanhvien.map((member) => (
                                <Option key={member.id} value={member.id}>
                                    {member.hoten}
                                </Option>
                            ))}
                        </Select>
                        <Table
                            dataSource={newMembers}
                            columns={[
                                {
                                    title: 'Tên',
                                    dataIndex: 'hoten',
                                    key: 'hoten',
                                },
                                {
                                    title: 'Ngày sinh',
                                    dataIndex: 'ngaysinh',
                                    key: 'ngaysinh',
                                },
                                {
                                    title: 'Quan hệ với chủ hộ',
                                    dataIndex: 'quanhe',
                                    key: 'quanhe',
                                    render: (_, record) => {
                                        if (record.quanhe === 'Chủ hộ mới') {
                                            return (
                                                <span>
                                                    <b>{record.quanhe}</b>
                                                </span>
                                            );
                                        } else {
                                            return (
                                                <Select
                                                    value={record.quanhe}
                                                    onChange={(value) => handleRelationshipChange(record.id, value)}
                                                    style={{ width: 150 }}
                                                >
                                                    {relationshipOptions.map((option) => (
                                                        <Option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            );

                                        }
                                    },
                                },
                                {
                                    title: 'Thao tác',
                                    dataIndex: 'action',
                                    key: 'action',
                                    render: (_, record) => (
                                        <Button type="link" onClick={() => handleRemoveMember(record.id)}>
                                            Xóa
                                        </Button>
                                    ),
                                },
                            ]}
                            footer={() => (
                                <div>
                                    <Select
                                        placeholder="Thành viên mới"
                                        value={newMember ? newMember.id : undefined} // Use newMember.id for Select's value
                                        onChange={(value) => {
                                            const member = memberOptions.find((member) => member.id === value);
                                            setNewMember(member); // Update newMember with the selected value
                                        }}
                                    >
                                        {memberOptions.map((member) => (
                                            <Option key={member.id} value={member.id}>
                                                {member.hoten}
                                            </Option>
                                        ))}
                                    </Select>
                                    <Button type="primary" onClick={handleAddNewMember}>
                                        Thêm thành viên
                                    </Button>
                                </div>
                            )}
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

export default HouseHoldSplit;
