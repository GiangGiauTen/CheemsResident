import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import axios from 'axios'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']
const label = ['Nam', 'Nữ', 'Khác']
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)
	return (
		<text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
			{`${label[index]} - ${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

const TiLeNamNu = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:4001/api/resident/')
				if (response.status === 200) {
					setData([
						{ name: 'Nam', value: [...response.data].filter((x) => x.gioiTinh.toLowerCase() == 'nam').length },
						{ name: 'Nữ', value: [...response.data].filter((x) => x.gioiTinh.toLowerCase() == 'nữ').length },
						{ name: 'khác', value: [...response.data].filter((x) => x.gioiTinh.toLowerCase() == 'khác').length },
					])
				}
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [])
	return (
		<div>
			<ResponsiveContainer width={800} height={800}>
				<PieChart width={800} height={800}>
					<Pie
						data={data}
						cx='50%'
						cy='50%'
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={350}
						fill='#8884d8'
						dataKey='value'>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	)
}

export default TiLeNamNu
