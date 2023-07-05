import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Modal, Select, AutoComplete, DatePicker } from 'antd'
import axios from 'axios'
import API_URL from '../../utils/config'

const { Option } = Select

const HouseHoldAdd = () => {
	// State hooks
	const [form] = Form.useForm()
	const [selectedChuHo, setSelectedChuHo] = useState(null)
	const [searchText, setSearchText] = useState('')
	const [memberFormItems, setMemberFormItems] = useState([])
	const [residents, setResidents] = useState([])

	// Fetch residents data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:4001/api/resident/residentsWithoutHouseHold')
				if (response.status === 200) {
					const resData = response.data.map((e) => {
						e['key'] = e['ID']
						return e
					})
					setResidents(resData)
				}
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [])

	// Other functions
	const handleSearch = (value) => {
		setSearchText(value)
	}

	const handleSelectChuHo = (record) => {
		setSelectedChuHo(record)
	}

	const FormatDate = (inputDate) => {
		const date = new Date(inputDate)
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')
		return `${year}-${month}-${day}`
	}
	// Fix so it doesn't return undefined please :(
	const handleSubmit = (values) => {
		values['ngayLap'] = FormatDate(values['ngayLap']['$d'])
		// Gửi dữ liệu đi hoặc xử lý dữ liệu ở đây
		console.log('Received values of form: ', values)
		// Ví dụ: gửi dữ liệu đi qua API
		fetch(`${API_URL}/household/add`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				// Xử lý lỗi nếu có
				console.error('Error:', error)
			})
		// Fix
		console.log(values)
	}

	const handleRemoveMemberFormItem = (index) => {
		setMemberFormItems((prevItems) => prevItems.filter((_, i) => i !== index))
	}

	const handleAddMemberFormItem = () => {
		const memberFormItem = (
			<div key={memberFormItems.length} style={{ display: 'flex', marginBottom: 8 }}>
				<Form.Item
					style={{ width: '500px', marginRight: 8 }}
					name={['household', 'members', memberFormItems.length, 'ID']}
					label='Họ tên'
					rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}>
					<Select
						options={residents.map((member) => ({ value: member.ID, label: member.hoTen }))}
						showSearch
						placeholder='Thành viên trong hộ'
					/>
				</Form.Item>
				<Form.Item
					style={{ width: '200px', marginRight: 8 }}
					name={['household', 'members', memberFormItems.length, 'quanhe']}
					label='Quan hệ'
					rules={[{ required: true, message: 'Vui lòng nhập quan hệ' }]}>
					<Select placeholder='Chọn quan hệ'>
						<Option value='Con'>Con</Option>
						<Option value='Vợ'>Vợ</Option>
						<Option value='Chồng'>Chồng</Option>
						<Option value='Bố'>Bố</Option>
						<Option value='Mẹ'>Mẹ</Option>
						<Option value='Ông'>Ông</Option>
						<Option value='Bà'>Bà</Option>
					</Select>
				</Form.Item>
				{memberFormItems.length > 0 && (
					<Button
						type='primary'
						danger
						onClick={() => handleRemoveMemberFormItem(memberFormItems.length)}
						style={{ marginTop: '32px' }}>
						Xóa
					</Button>
				)}
			</div>
		)
		setMemberFormItems((prevItems) => [...prevItems, memberFormItem])
	}

	return (
		<div>
			<Form layout='vertical' form={form} onFinish={handleSubmit}>
				<Form.Item name='maHoKhau' label='Mã hộ khẩu' rules={[{ required: true, message: 'Vui lòng nhập mã hộ khẩu' }]}>
					<Input placeholder='Nhập mã hộ khẩu' />
				</Form.Item>
				<Form.Item name='diaChi' label='Địa chỉ' rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}>
					<Input placeholder='Nhập địa chỉ' />
				</Form.Item>
				<Form.Item
					name='ngayLap'
					label='Ngày tạo'
					rules={[{ type: 'object', required: true, message: 'Hãy nhập ngày tạo' }]}>
					<DatePicker />
				</Form.Item>
				<Form.Item name='chuHo' label='Chủ hộ' rules={[{ required: true, message: 'Vui lòng chọn chủ hộ' }]}>
					<Select
						showSearch
						placeholder='Tìm kiếm chủ hộ'
						optionFilterProp='children'
						onSearch={handleSearch}
						onSelect={handleSelectChuHo}
						filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
						{residents.map((member) => (
							<Option key={member.ID} value={member.ID}>
								{member.hoTen}
							</Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item label='Thành viên trong hộ' style={{ marginBottom: 0 }}>
					{memberFormItems}
				</Form.Item>
				<Form.Item>
					<Button type='dashed' onClick={handleAddMemberFormItem} style={{ width: '60%' }}>
						Thêm thành viên
					</Button>
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default HouseHoldAdd
