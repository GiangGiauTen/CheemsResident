function TemporaryResidentRegister(body, connection, res) {
	const { idNhanKhau, maGiayTamVang, tuNgay, denNgay, lyDo } = body
	const query =
		'INSERT INTO tam_vang(idNhanKhau, maGiayTamVang, noiTamTru, tuNgay, denNgay, lyDo) value (?, ?, ?, ?, ?, ?)'
	connection.query(query, [idNhanKhau, maGiayTamVang, tuNgay, denNgay, lyDo], (error, result) => {
		if (error) {
			res.status(500).json({ error: 'Error' })
		} else {
			res.status(200).json({ message: 'Khai báo tạm trú thành công.' })
		}
	})
}
export default TemporaryResidentRegister
