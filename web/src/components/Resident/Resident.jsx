import React, { useRef, useState, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Space, Table, Modal } from 'antd'
import Highlighter from 'react-highlight-words'
import axios from 'axios'

const Resident = () => {
	const [showDetailInfo, setShowDetailInfo] = useState(false)
	const [searchText, setSearchText] = useState('')
	const [searchedColumn, setSearchedColumn] = useState('')
	const [selectedIndex, setSelectedIndex] = useState(null)
	const [selectedRowData, setSelectedRowData] = useState(null)

	const [modalName, setModalName] = useState('')
	const [isModalVisible, setIsModalVisible] = useState(false)
	const searchInput = useRef(null)
	const [residentData, setResidentData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:4001/api/resident/')
				if (response.status === 200) {
					const resData = response.data.map((e) => {
						e['key'] = e['ID']
						e['namSinh'] = new Date(e['namSinh']).toLocaleDateString('vi-VN')
						return e
					})
					setResidentData(resData)
				}
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [])

	// Hàm xử lý khi người dùng nhấn nút "Sửa"
	const handleModalClose = () => {
		setIsModalVisible(false)
	}
	const handleRowClick = (record) => {
		setSelectedRowData(record)
		setIsModalVisible(true)
	}
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm()
		setSearchText(selectedKeys[0])
		setSearchedColumn(dataIndex)
	}
	const handleReset = (clearFilters) => {
		clearFilters()
		setSearchText('')
	}
	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div
				style={{
					padding: 8,
				}}
				onKeyDown={(e) => e.stopPropagation()}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: 'block',
					}}
				/>
				<Space>
					<Button
						type='primary'
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size='small'
						style={{
							width: 90,
						}}>
						Search
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters)}
						size='small'
						style={{
							width: 90,
						}}>
						Reset
					</Button>
					<Button
						type='link'
						size='small'
						onClick={() => {
							confirm({
								closeDropdown: false,
							})
							setSearchText(selectedKeys[0])
							setSearchedColumn(dataIndex)
						}}>
						Filter
					</Button>
					<Button
						type='link'
						size='small'
						onClick={() => {
							close()
						}}>
						close
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? '#1677ff' : undefined,
				}}
			/>
		),
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => {
					if (searchInput.current) {
						searchInput.current.select()
					}
				}, 100)
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#ffc069',
						padding: 0,
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (
				text
			),
	})
	const columns = [
		{
			title: 'ID',
			dataIndex: 'key',
			key: 'key',
			width: '10%',
		},
		{
			title: 'Họ và tên',
			dataIndex: 'hoTen',
			key: 'hoTen',
			width: '30%',
			...getColumnSearchProps('hoTen'),
			render: (_, record, index) => (
				<div
					onClick={() => {
						setModalName(record.hoTen)
					}}>
					{record.hoTen}
				</div>
			),
		},
		{
			title: 'Giới tính',
			dataIndex: 'gioiTinh',
			onFilter: (value, record) => record.gioiTinh.startsWith(value),
			filterSearch: true,
			width: '20%',
		},
		{
			title: 'Ngày tháng năm sinh',
			dataIndex: 'namSinh',
			key: 'namSinh',
			width: '20%',
			...getColumnSearchProps('namSinh'),
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Quê quán',
			dataIndex: 'nguyenQuan',
			key: 'nguyenQuan',
			...getColumnSearchProps('nguyenQuan'),
			sorter: (a, b) => a.nguyenQuan.length - b.nguyenQuan.length,
			sortDirections: ['descend', 'ascend'],
		},
	]
	return (
		<div>
			<Table
				columns={columns}
				dataSource={residentData}
				onRow={(record) => ({ onClick: () => handleRowClick(record) })}
			/>
			<Modal title='Thông tin cơ bản' visible={isModalVisible} onCancel={handleModalClose} footer={null} width={800}>
				{selectedRowData && (
					<div>
						<p>
							<strong>Họ tên:</strong> {selectedRowData.hoTen}
						</p>
						<p>
							<strong>Năm sinh:</strong> {selectedRowData.namSinh}
						</p>
						<p>
							<strong>Giới tính:</strong> {selectedRowData.gioiTinh}
						</p>
						<p>
							<strong>Nguyên quán:</strong> {selectedRowData.nguyenQuan}
						</p>
						<p>
							<strong>Dân tộc:</strong> {selectedRowData.danToc}
						</p>
						<p>
							<strong>Quốc tịch:</strong>
							{selectedRowData.quocTich}
						</p>
						<p>
							<strong>Số CMT/CCCD:</strong>
							{selectedRowData.soCMT}
						</p>
						{showDetailInfo ? (
							<div
								style={{ cursor: 'pointer', color: 'blue' }}
								onClick={() => {
									setShowDetailInfo(false)
								}}>
								[Hide]
							</div>
						) : (
							<div
								style={{ cursor: 'pointer', color: 'blue' }}
								onClick={() => {
									setShowDetailInfo(true)
								}}>
								[Show more]
							</div>
						)}
						{showDetailInfo && (
							<div>
								<p>
									<strong>Nơi sinh:</strong> {selectedRowData.noiSinh}
								</p>
								<p>
									<strong>Tôn giáo:</strong> {selectedRowData.tonGiao}
								</p>
								<p>
									<strong>Số hộ chiếu:</strong> {selectedRowData.soHoChieu}
								</p>
								<p>
									<strong>Nơi thường trú:</strong> {selectedRowData.noiThuongTru}
								</p>
								<p>
									<strong>Địa chỉ hiện tại:</strong> {selectedRowData.diaChiHienNay}
								</p>
								<p>
									<strong>Trình độ học vấn:</strong> {selectedRowData.trinhDoHocVan}
								</p>
								<p>
									<strong>Trình độ chuyên môn:</strong> {selectedRowData.TrinhDoChuyenMon}
								</p>
								<p>
									<strong>Trình độ ngoại ngữ:</strong> {selectedRowData.trinhDoNgoaiNgu}
								</p>
								<Table
									columns={[
										{
											title: 'Từ Ngày',
											dataIndex: 'tuNgay',
											key: 'tuNgay',
											render: (value) => <div>{new Date(value).toLocaleDateString('vi-VN')}</div>,
										},
										{
											title: 'Đến Ngày',
											dataIndex: 'denNgay',
											key: 'denNgay',
											render: (value) => <div>{new Date(value).toLocaleDateString('vi-VN')}</div>,
										},
										{
											title: 'Địa chỉ',
											dataIndex: 'diaChi',
											key: 'diaChi',
										},
										{
											title: 'Nghề nghiệp',
											dataIndex: 'ngheNghiep',
											key: 'ngheNghiep',
										},
										{
											title: 'Nơi làm việc',
											dataIndex: 'noiLamViec',
											key: 'noiLamViec',
										},
									]}
									dataSource={selectedRowData.tieuSu}
									pagination={false}
								/>
							</div>
						)}
					</div>
				)}
			</Modal>
		</div>
	)
}
export default Resident
