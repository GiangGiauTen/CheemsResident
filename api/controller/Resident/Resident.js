async function getAllResident(connection, callback) {
  try {
    const query1 = `
      SELECT nhan_khau.*, chung_minh_thu.soCMT
      FROM nhan_khau
      JOIN chung_minh_thu ON nhan_khau.ID = chung_minh_thu.idNhanKhau
    `;

    const result = await executeQuery(connection, query1);

    const promises = result.map(async (element) => {
      const idNhanKhau = element.ID;
      const query2 = `
        SELECT tuNgay, denNgay, diaChi, ngheNghiep, noiLamViec
        FROM tieu_su
        WHERE idNhanKhau = ?
      `;

      const result2 = await executeQuery(connection, query2, [idNhanKhau]);
      element.tieuSu = result2;
      return element;
    });

    const updatedResult = await Promise.all(promises);
    callback(null, updatedResult);
  } catch (error) {
    callback(error, null);
  }
}

function executeQuery(connection, query, params = []) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  getAllResident,
};
