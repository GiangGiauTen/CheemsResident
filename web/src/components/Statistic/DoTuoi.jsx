import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import axios from 'axios'

const DoTuoi = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:4001/api/resident/')
				if (response.status === 200) {
					const ageCounts = {}
					response.data.forEach((user) => {
						const age = new Date().getFullYear() - new Date(user.namSinh).getFullYear()
						ageCounts[age] = (ageCounts[age] || 0) + 1
					})

					const ageData = []
					for (let age = 0; age <= 100; age++) {
						const count = ageCounts[age] || 0
						ageData.push({ age, count })
					}

					setData(ageData)
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	const maxCount = Math.max(...data.map((entry) => entry.count))

	return (
		<div>
			<ResponsiveContainer width='100%' height={450}>
				<BarChart data={data} height={400}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis
						dataKey='age'
						type='number'
						domain={[0, 100]}
						label={{ value: 'Age', position: 'insideBottom', offset: -10 }}
					/>
					<YAxis domain={[0, maxCount]} label={{ value: 'Count', angle: -90, position: 'insideLeft' }} />
					<Tooltip />
					<Bar dataKey='count' fill='#8884d8' />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default DoTuoi
