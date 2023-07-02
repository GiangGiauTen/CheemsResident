import React from 'react'
import { Button, Form, Input, DatePicker, message } from 'antd'
import { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import API_URL from '../../../utils/config'
const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 10,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 20,
		},
	},
}
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 15,
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
function KhaiTu() {
	const [form] = Form.useForm()
	const [cmt, setCmt] = useState('')
	const [residentId, setResidentId] = useState(null)
	const [displayName, setDisplayName] = useState('')
	const [inputStatus, setInputStatus] = useState(true)
	useEffect(() => {
		form.validateFields(['cmtNguoiKhaiTu'])
	}, [inputStatus])

	const [cmt2, setCmt2] = useState('')
	const [residentId2, setResidentId2] = useState(null)
	const [displayName2, setDisplayName2] = useState('')
	const [inputStatus2, setInputStatus2] = useState(true)

	const disabledNgayChetDate = (current) => {
		const ngayKhaiValue = form.getFieldValue('ngayKhai')
		if (ngayKhaiValue) {
			return current.isAfter(ngayKhaiValue)
		}
		return false
	}
	useEffect(() => {
		form.validateFields(['cmtNguoiChet'])
	}, [inputStatus2])
	const onFinish = (values) => {
		values['idNguoiKhai'] = residentId
		values['idNguoiChet'] = residentId2
		values['ngayChet'] = FormatDate(values['ngayChet']['$d'])
		values['ngayKhai'] = FormatDate(values['ngayKhai']['$d'])
		console.log('Received values of form: ', values)
		fetch(`${API_URL}/resident/deathNotify`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				if (data.status == 200) {
					message.success(data.message, 2, () => {
						form.resetFields()
					})
				}
				if (data.status == 202) {
					message.info(data.message, 2, null)
				}
			})
			.catch((error) => {
				message.error('Có lỗi xảy ra, vui lòng thử lại sau', 2, () => {})
			})
	}

	return (
		<Form
			{...formItemLayout}
			form={form}
			name='register'
			onFinish={onFinish}
			style={{
				maxWidth: 800,
			}}
			scrollToFirstError>
			<Form.Item
				name='cmtNguoiKhaiTu'
				label='CMT/CCCD người khai tử'
				rules={[
					{
						required: true,
						message: 'Hãy nhập số chứng minh thư/CCCD người khai tử',
					},
					{ min: 9, message: 'Hãy nhập đủ các số trên Chứng minh thư/CCCD' },
					{
						pattern: /^[0-9]+$/,
						message: 'Chứng minh thư/CCCD chỉ được chứa các ký tự số',
					},
					{
						validator: (_, value) => {
							if (inputStatus) {
								return Promise.resolve()
							}
							return Promise.reject(new Error('Không tìm thấy thông tin'))
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
							setResidentId(res.data[0].idNhanKhau)
							setDisplayName(res.data[0].hoTen)
							setInputStatus(true)
						}
					} catch (error) {
						setResidentId(null)
						setDisplayName('')
						setInputStatus(false)
					}
				}}>
				Check
			</Button>
			{residentId && (
				<Form.Item label='Họ và tên người khai tử'>
					<Input disabled value={displayName} required />
				</Form.Item>
			)}
			<Form.Item
				name='cmtNguoiChet'
				label='CMT/CCCD người chết'
				rules={[
					{
						required: true,
						message: 'Hãy nhập số chứng minh thư/CCCD người chết',
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
							return Promise.reject(new Error('Không tìm thấy thông tin')) // Validation fails
						},
					},
				]}>
				<Input
					onChange={(e) => {
						setCmt2(e.target.value)
					}}
				/>
			</Form.Item>
			<Button
				style={{ margin: '0px auto 15px', display: 'block' }}
				onClick={async () => {
					try {
						const res = await axios.post(`${API_URL}/resident/checkIdentityCard`, { chungMinhThu: cmt2 })
						console.log(res)
						if (res.status === 201) {
							setResidentId2(res.data[0].idNhanKhau)
							setDisplayName2(res.data[0].hoTen)
							setInputStatus2(true)
						}
					} catch (error) {
						setResidentId2(null)
						setDisplayName2('')
						setInputStatus2(false)
					}
				}}>
				Check
			</Button>
			{residentId2 && (
				<Form.Item label='Họ và tên người chết'>
					<Input disabled value={displayName2} required />
				</Form.Item>
			)}
			<Form.Item
				name='soGiayKhaiTu'
				label='Giấy chứng tử số'
				rules={[
					{
						required: true,
						message: 'Hãy nhập số giấy chứng tử',
					},
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				name='ngayKhai'
				label='Ngày khai'
				rules={[{ required: true, message: 'Hãy chọn ngày khai tử' }]}
				tooltip={
					'Trong thời hạn 15 ngày kể từ ngày có người chết thì vợ, chồng hoặc con, cha, mẹ hoặc người thân thích khác của người chết có trách nhiệm đi đăng ký khai tử; trường hợp người chết không có người thân thích thì đại diện của cơ quan, tổ chức, cá nhân liên quan có trách nhiệm đi khai tử.'
				}>
				<DatePicker
					disabledDate={(current) => {
						return current.isAfter(moment()) || current.isBefore(moment().subtract(15, 'day'))
					}}
				/>
			</Form.Item>

			<Form.Item name='ngayChet' label='Ngày chết' rules={[{ required: true, message: 'Hãy chọn ngày khai tử' }]}>
				<DatePicker disabledDate={disabledNgayChetDate} />
			</Form.Item>

			<Form.Item
				name='lyDoChet'
				label='Lý do chết'
				rules={[
					{
						required: true,
						message: 'Hãy nhập lý do chết',
					},
				]}>
				<Input.TextArea showCount maxLength={100} />
			</Form.Item>

			<Form.Item {...tailFormItemLayout}>
				<Button type='primary' htmlType='submit'>
					Xác nhận
				</Button>
			</Form.Item>
		</Form>
	)
}
export default KhaiTu
