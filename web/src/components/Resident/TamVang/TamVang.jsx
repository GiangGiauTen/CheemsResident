import React, { useEffect } from 'react'
import { Button, Form, Input, Select, DatePicker } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import API_URL from '../../../utils/config'
import moment from 'moment'
const { RangePicker } = DatePicker

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
}
const FormatDate = (inputDate) => {
	const date = new Date(inputDate)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	return `${year}-${month}-${day}`
}
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
}
function TamVang() {
	const [form] = Form.useForm()
	const [cmt, setCmt] = useState('')
	const [residentId, setResidentId] = useState(-1)
	const [displayName, setDisplayName] = useState('')
	const [inputStatus, setInputStatus] = useState(true)

	useEffect(() => {
		form.validateFields(['CMT'])
	}, [inputStatus])
	const onFinish = (values) => {
		values['idNhanKhau'] = residentId
		values['tuNgay'] = FormatDate(values['range-picker'][0]['$d'])
		values['denNgay'] = FormatDate(values['range-picker'][1]['$d'])
		console.log('Received values of form: ', values)
		fetch(`${API_URL}/resident/absentRegister`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				// Xử lý kết quả nếu cần
				console.log(data)
			})
			.catch((error) => {
				// Xử lý lỗi nếu có
				console.error('Error:', error)
			})
	}

	return (
		<Form
			{...formItemLayout}
			form={form}
			name='register'
			onFinish={onFinish}
			style={{
				maxWidth: 600,
			}}
			scrollToFirstError>
			<Form.Item
				name='CMT'
				label='Số chứng minh thư'
				rules={[
					{
						required: true,
						message: 'Hãy nhập số chứng minh thư/CCCD',
					},
					{ min: 9, message: 'Hãy nhập đủ các số trên Chứng minh thư/CCCD' },
					{
						pattern: /^[0-9]+$/,
						message: 'Chứng minh thư/CCCD chỉ được chứa các ký tự số',
					},
					{
						validator: (_, value) => {
							if (inputStatus) {
								return Promise.resolve() // Validation succeeds
							}
							return Promise.reject(new Error('Không tìm thấy thông tin cư dân')) // Validation fails
						},
					},
				]}>
				<Input
					onChange={(e) => {
						setCmt(e.target.value)
					}}
				/>
			</Form.Item>
			<Button
				style={{ margin: '0px auto 15px', display: 'block' }}
				onClick={async () => {
					try {
						const res = await axios.post(`${API_URL}/resident/checkIdentityCard`, { chungMinhThu: cmt })
						console.log(res)
						if (res.status === 201) {
							setResidentId(res.data[0].ID)
							setDisplayName(res.data[0].hoTen)
							setInputStatus(true)
						}
					} catch (error) {
						setResidentId(-1)
						setDisplayName('')
						setInputStatus(false)
					}
				}}>
				Check
			</Button>
			{residentId && (
				<Form.Item label='Tên'>
					<Input disabled value={displayName} />
				</Form.Item>
			)}
			<Form.Item
				name='maGiayTamVang'
				label='Mã giấy tạm vắng'
				rules={[
					{
						required: true,
						message: 'Please input your temporarily absent code!',
					},
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				name='noiTamTru'
				label='Nơi chuyển đến'
				rules={[
					{
						required: true,
						message: 'Please input your temporary place!',
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='range-picker'
				label='Từ ngày → đến ngày'
				rules={[{ type: 'array', required: true, message: 'Hãy chọn khoảng thời gian tạm vắng' }]}>
				<RangePicker
					disabledDate={(current) => {
						return current.isBefore(moment())
					}}
				/>
			</Form.Item>

			<Form.Item
				name='lyDo'
				label='Lý do'
				rules={[
					{
						required: true,
						message: 'Hãy nhập lý do chuyển đi',
					},
				]}>
				<Input.TextArea showCount maxLength={100} />
			</Form.Item>

			<Form.Item {...tailFormItemLayout}>
				<Button type='primary' htmlType='submit'>
					Register
				</Button>
			</Form.Item>
		</Form>
	)
}
export default TamVang
