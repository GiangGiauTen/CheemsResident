async function getAllHousehold(connection) {
    try {
        const query = `
        SELECT ho_khau.*, GROUP_CONCAT(CONCAT(thanh_vien_cua_ho.idNhanKhau, ':', thanh_vien_cua_ho.quanHeVoiChuHo) SEPARATOR ',') AS householdMembers
        FROM ho_khau
        LEFT JOIN thanh_vien_cua_ho ON ho_khau.ID = thanh_vien_cua_ho.idHoKhau
        GROUP BY ho_khau.ID
      `;

        const result = await executeQuery(connection, query);

        const updatedResult = result.map((element) => {
            const householdMembers = element.householdMembers;
            if (householdMembers) {
                element.householdMembers = householdMembers.split(',').map((member) => {
                    const [idNhanKhau, quanHeVoiChuHo] = member.split(':');
                    return { idNhanKhau, quanHeVoiChuHo };
                });
            } else {
                element.householdMembers = [];
            }
            return element;
        });

        return updatedResult;
    } catch (error) {
        throw error;
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
    getAllHousehold,
};
