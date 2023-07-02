async function CheckIdentityCard(body, connection, res) {
	const { chungMinhThu } = body
	const query =
		'SELECT * FROM nhan_khau LEFT JOIN chung_minh_thu ON nhan_khau.ID = chung_minh_thu.idNhanKhau WHERE soCMT = ?'
	try {
		await connection.query(query, chungMinhThu, (error, result) => {
			if (error || result.length === 0) {
				return res.status(500).json({ error: 'Resident Not found' })
			}
			if (result.length > 0) {
				return res.status(201).json(result)
			}
		})
	} catch (err) {
		throw err
	}
}
module.exports = {
	CheckIdentityCard: CheckIdentityCard,
}
