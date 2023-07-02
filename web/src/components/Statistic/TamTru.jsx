import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import axios from 'axios'
import API_URL from '../../utils/config'

const columns = [
	{
		title: 'ID',
		dataIndex: 'ID',
		key: 'ID',
	},
	{
		title: 'Họ Tên',
		dataIndex: 'hoTen',
		key: 'hoTen',
	},
	{
		title: 'Số CMT',
		dataIndex: 'soCmt',
		key: 'soCmt',
	},
	{
		title: 'Mã Giấy Tạm Trú',
		dataIndex: 'maGiayTamtru',
		key: 'maGiayTamtru',
	},
	{
		title: 'Địa Chỉ Tạm Trú',
		dataIndex: 'diaChiTamTru',
		key: 'diaChiTamTru',
	},
	{
		title: 'Số Điện Thoại Người Đăng Ký',
		dataIndex: 'soDienThoaiNguoiDangKy',
		key: 'soDienThoaiNguoiDangKy',
	},
	{
		title: 'Từ Ngày',
		dataIndex: 'tuNgay',
		key: 'tuNgay',
		render: (text) => new Date(text).toLocaleDateString('vi-VN'),
	},
	{
		title: 'Đến Ngày',
		dataIndex: 'denNgay',
		key: 'denNgay',
		render: (text) => new Date(text).toLocaleDateString('vi-VN'),
	},
	{
		title: 'Lý Do',
		dataIndex: 'lyDo',
		key: 'lyDo',
	},
]

const TamTru = () => {
	const [dataSource, setDataSource] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			await axios.get(`${API_URL}/resident/temporaryResident`).then((data) => {
				if (data.status == 200) {
					console.log(data.data)
					setDataSource(data.data)
				} else {
					console.log(data)
				}
			})
		}
		fetchData()
	}, [])
	return <Table dataSource={dataSource} columns={columns} />
}

export default TamTru
