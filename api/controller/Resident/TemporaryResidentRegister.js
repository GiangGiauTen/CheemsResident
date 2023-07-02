async function TemporaryResidentRegister(body, connection, res) {
	console.log(body)
	const { hoTen, soCmt, maGiayTamTru, diaChiTamTru, soDienThoaiNguoiDangKy, tuNgay, denNgay, lyDo } = body
	const query =
		'INSERT INTO tam_tru(hoTen, soCmt, maGiayTamTru, diaChiTamTru, soDienThoaiNguoiDangKy, tuNgay, denNgay, lyDo) value (?, ?, ?, ?, ?, ?, ?, ?)'
	await connection.query(
		query,
		[hoTen, soCmt, maGiayTamTru, diaChiTamTru, soDienThoaiNguoiDangKy, tuNgay, denNgay, lyDo],
		(error, result) => {
			if (error) {
				console.log(error)
				res.status(500).json({ error: 'Error' })
			} else {
				res.status(200).json({ message: 'Khai báo tạm trú thành công.' })
			}
		},
	)
}

async function GetAllTemporaryResident(connection, res) {
	const query1 = `SELECT * FROM tam_tru`
	await connection.query(query1, [], (error, result) => {
		if (error) {
			console.log(error)
		} else {
			res.status(200).json(result)
		}
	})
}

module.exports = {
	TemporaryResidentRegister: TemporaryResidentRegister,
	GetAllTemporaryResident: GetAllTemporaryResident,
}
