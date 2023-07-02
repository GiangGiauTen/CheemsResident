import React from 'react'
import { Button, Form, Input, InputNumber, Select, DatePicker } from 'antd'
import { useState } from 'react'
import danTocVietNam from './Options'
import moment from 'moment'
import API_URL from '../../../utils/config'
const { Option } = Select

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
const Add = () => {
	const [form] = Form.useForm()
	const onFinish = (values) => {
		// Gửi dữ liệu đi hoặc xử lý dữ liệu ở đây
		values['namSinh'] = FormatDate(values['namSinh']['$d'])
		console.log('Received values of form: ', values)
		// Ví dụ: gửi dữ liệu đi qua API
		fetch(`${API_URL}/resident/add`, {
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
	}
	const prefixSelector = (
		<Form.Item name='prefix' noStyle>
			<Select
				style={{
					width: 70,
				}}>
				<Option value='86'>+86</Option>
				<Option value='87'>+87</Option>
			</Select>
		</Form.Item>
	)
	const suffixSelector = (
		<Form.Item name='suffix' noStyle>
			<Select
				style={{
					width: 70,
				}}>
				<Option value='USD'>$</Option>
				<Option value='CNY'>¥</Option>
			</Select>
		</Form.Item>
	)
	const [autoCompleteResult, setAutoCompleteResult] = useState([])
	const onWebsiteChange = (value) => {
		if (!value) {
			setAutoCompleteResult([])
		} else {
			setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`))
		}
	}
	const websiteOptions = autoCompleteResult.map((website) => ({
		label: website,
		value: website,
	}))
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
				name='hoTen'
				label='Họ và tên'
				placeholder='Hãy nhập tên đầy đủ của bạn'
				rules={[
					{
						required: true,
						message: 'Hãy nhập tên đầy đủ của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item name='bietDanh' label='Tên khác (nếu có)'>
				<Input />
			</Form.Item>
			<Form.Item
				name='namSinh'
				label='Ngày tháng năm sinh'
				rules={[{ type: 'object', required: true, message: 'Hãy nhập ngày tháng năm sinh' }]}>
				<DatePicker
					disabledDate={(current) => {
						return current.isBefore(moment().subtract(100, 'year')) || current.isAfter(moment())
					}}
				/>
			</Form.Item>
			<Form.Item name='gioiTinh' label='Giới tính' rules={[{ required: true, message: 'Please select gender!' }]}>
				<Select placeholder='Hãy chọn giới tính của bạn'>
					<Option value='Nam'>Nam</Option>
					<Option value='Nữ'>Nữ</Option>
					<Option value='Khác'>Khác</Option>
				</Select>
			</Form.Item>
			<Form.Item name='noiSinh' label='Nơi sinh'>
				<Input />
			</Form.Item>
			<Form.Item
				name='nguyenQuan'
				label='Nguyên quán'
				rules={[
					{
						required: true,
						message: 'Hãy nhập nguyên quán của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='tonGiao'
				label='Tôn Giáo'
				rules={[
					{
						required: true,
						message: 'Hãy nhập tôn giáo của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='quocTich'
				label='Quốc tịch'
				rules={[
					{
						required: true,
						message: 'Hãy nhập quốc tịch của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='danToc'
				label='Dân tộc'
				rules={[
					{
						required: true,
						message: 'Hãy chọn dân tộc của bạn',
						whitespace: true,
					},
				]}>
				<Select showSearch placeholder='Hãy chọn dân tộc của bạn'>
					{danTocVietNam.map((e) => (
						<Option value={e} key={e}>
							{e}
						</Option>
					))}
				</Select>
			</Form.Item>
			<Form.Item name='soHoChieu' label='Hộ chiếu'>
				<Input />
			</Form.Item>
			<Form.Item
				name='soCMT'
				label='Chứng minh thư/CCCD'
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
				name='noiThuongTru'
				label='Địa chỉ thường trú'
				rules={[
					{
						required: true,
						message: 'Hãy điền địa chỉ thường trú của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='diaChiHienNay'
				label='Địa chỉ hiện tại'
				rules={[
					{
						required: true,
						message: 'Hãy điền địa chỉ hiện tại của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='trinhDoHocVan'
				label='Trình độ học vấn'
				rules={[
					{
						required: true,
						message: 'Hãy điền trình độ học vấn của bạn',
						whitespace: true,
					},
				]}>
				<Select placeholder='Hãy chọn trình độ học vấn của bạn'>
					<Option value='9/12'>9/12</Option>
					<Option value='12/12'>12/12</Option>
					<Option value='THCS'>THCS</Option>
					<Option value='THPT'>THPT</Option>
					<Option value='Trung cấp nghề/ Trung cấp chuyên nghiệp'>Trung cấp nghề/ Trung cấp chuyên nghiệp</Option>
					<Option value='Đại học/ Cao đẳng'>Đại học/ Cao đẳng</Option>
					<Option value='Cao học'>Cao học</Option>
					<Option value='Khác'>Khác</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name='TrinhDoChuyenMon'
				label='Trình độ chuyên môn'
				rules={[
					{
						required: true,
						message: 'Hãy nhập trình độ chuyên môn của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='trinhDoNgoaiNgu'
				label='Trình độ ngoại ngữ'
				rules={[
					{
						required: true,
						message: 'Hãy nhập trình độ ngoại ngữ của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='ngheNghiep'
				label='Nghề nghiệp'
				rules={[
					{
						required: true,
						message: 'Hãy nhập nghề nghiệp của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item
				name='noiLamViec'
				label='Nơi làm việc'
				rules={[
					{
						required: true,
						message: 'Hãy nhập nơi làm việc của bạn',
						whitespace: true,
					},
				]}>
				<Input />
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button type='primary' htmlType='submit'>
					Thêm
				</Button>
			</Form.Item>
		</Form>
	)
}
export default Add
