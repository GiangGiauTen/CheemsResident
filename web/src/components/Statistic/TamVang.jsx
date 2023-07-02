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
		title: 'Nhan Khau ID',
		dataIndex: 'idNhanKhau',
		key: 'idNhanKhau',
	},
	{
		title: 'Ma Giay Tam Vang',
		dataIndex: 'maGiayTamVang',
		key: 'maGiayTamVang',
	},
	{
		title: 'Noi Tam Tru',
		dataIndex: 'noiTamtru',
		key: 'noiTamtru',
	},
	{
		title: 'Tu Ngay',
		dataIndex: 'tuNgay',
		key: 'tuNgay',
		render: (text) => new Date(text).toLocaleDateString('vi-VN'),
	},
	{
		title: 'Den Ngay',
		dataIndex: 'denNgay',
		key: 'denNgay',
		render: (text) => new Date(text).toLocaleDateString('vi-VN'),
	},
	{
		title: 'Ly Do',
		dataIndex: 'lyDo',
		key: 'lyDo',
	},
]

const TamVang = () => {
	const [dataSource, setDataSource] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			await axios.get(`${API_URL}/resident/absentRegister`).then((data) => {
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

export default TamVang
