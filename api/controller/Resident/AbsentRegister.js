async function AbsentRegister(body, connection, res) {
	const { idNhanKhau, maGiayTamVang, tuNgay, denNgay, lyDo, noiTamTru } = body
	const query =
		'INSERT INTO tam_vang(idNhanKhau, maGiayTamVang, noiTamTru, tuNgay, denNgay, lyDo) values (?, ?, ?, ?, ?, ?)'
	await connection.query(query, [idNhanKhau, maGiayTamVang, noiTamTru, tuNgay, denNgay, lyDo], (error, result) => {
		console.log(error)
		if (error) {
			res.status(500).json({ error: error })
		} else {
			res.status(200).json({ message: 'Khai báo tạm vắng thành công.' })
		}
	})
}

async function GetAllAbsentRegister(connection, res) {
	const query1 = `SELECT * FROM tam_vang`
	await connection.query(query1, [], (error, result) => {
		if (error) {
			console.log(error, result)
		} else {
			res.status(200).json(result)
		}
	})
}
module.exports = {
	AbsentRegister: AbsentRegister,
	GetAllAbsentRegister: GetAllAbsentRegister,
}
