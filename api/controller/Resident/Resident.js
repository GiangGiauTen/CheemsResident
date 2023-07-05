async function getAllResident(connection, res) {
	try {
		const query1 = `
      SELECT nhan_khau.*, chung_minh_thu.soCMT FROM nhan_khau 
      LEFT JOIN chung_minh_thu ON nhan_khau.ID = chung_minh_thu.idNhanKhau
      WHERE ghiChu is NULL
    `

		const result = await executeQuery(connection, query1)

		const promises = result.map(async (element) => {
			const idNhanKhau = element.ID
			const query2 = `
        SELECT tuNgay, denNgay, diaChi, ngheNghiep, noiLamViec
        FROM tieu_su
        WHERE idNhanKhau = ?
      `

			const result2 = await executeQuery(connection, query2, [idNhanKhau])
			element.tieuSu = result2
			return element
		})

		const updatedResult = await Promise.all(promises)
		res.status(200).json(updatedResult)
	} catch (error) {
		res.status(500).json({ error: 'Error' })
	}
}

function executeQuery(connection, query, params = []) {
	return new Promise((resolve, reject) => {
		connection.query(query, params, (error, result) => {
			if (error) {
				reject(error)
			} else {
				resolve(result)
			}
		})
	})
}

async function getAllResidentWithoutHouseHold(connection, res) {
	try {
		const query1 = `
      SELECT nk.hoTen, nk.ID FROM nhan_khau nk LEFT JOIN thanh_vien_cua_ho tvch 
      ON nk.ID = tvch.idNhanKhau WHERE tvch.idNhanKhau IS NULL;
    `
		const result = await executeQuery(connection, query1)
		res.status(200).json(result)
	} catch (error) {
		res.status(500).json({ error: 'Error' })
	}
}
module.exports = {
	getAllResident,
	getAllResidentWithoutHouseHold,
}
