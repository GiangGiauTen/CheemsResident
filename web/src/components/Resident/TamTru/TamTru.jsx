import React from 'react'
import { Button, Form, Input, Select, DatePicker, message } from 'antd'
import moment from 'moment'
import { useState } from 'react'
import API_URL from '../../../utils/config'
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
const FormatDate = (inputDate) => {
	const date = new Date(inputDate)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	return `${year}-${month}-${day}`
}
const TamTru = () => {
	const [form] = Form.useForm()
	const onFinish = (values) => {
		values['tuNgay'] = FormatDate(values['range-picker'][0]['$d'])
		values['denNgay'] = FormatDate(values['range-picker'][1]['$d'])
		console.log('Received values of form: ', values)
		fetch(`${API_URL}/resident/temporaryResident`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.message) {
					message.success(data.message, 2, () => {
						form.resetFields()
					})
				} else {
					message.error('Có lỗi xảy ra, vui lòng thử lại sau', 2, () => {})
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
				maxWidth: 600,
				margin: '0px auto',
			}}
			scrollToFirstError>
			<Form.Item
				name='hoTen'
				label='Họ và tên'
				rules={[
					{
						required: true,
						message: 'Hãy nhập họ và tên của bạn',
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='soCmt'
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
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				name='soDienThoaiNguoiDangKy'
				label='Số điện thoại'
				rules={[
					{
						required: true,
						message: 'Hãy nhập số điện thoại của bạn',
					},
					{ min: 9, message: 'Hãy nhập đủ số' },
					{ max: 10, message: 'Hãy nhập đủ số' },
					{
						pattern: /^[0-9]+$/,
						message: 'Số điện thoại chỉ được chứa các ký tự số',
					},
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				name='maGiayTamTru'
				label='Mã giấy tạm trú'
				rules={[
					{
						required: true,
						message: 'Hãy điền mã giấy tạm trú của bạn!',
					},
				]}>
				<Input />
			</Form.Item>

			<Form.Item
				name='diaChiTamTru'
				label='Địa chỉ tạm trú'
				rules={[
					{
						required: true,
						message: 'Hãy nhập nơi mà bạn sẽ tạm trú trong thời gian này!',
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
						message: 'Hãy nhập lý do chuyển đến',
					},
				]}>
				<Input.TextArea showCount maxLength={100} />
			</Form.Item>

			<Form.Item {...tailFormItemLayout}>
				<Button type='primary' htmlType='submit'>
					Đăng ký
				</Button>
			</Form.Item>
		</Form>
	)
}
export default TamTru
