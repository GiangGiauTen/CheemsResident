const { query } = require("express");

async function getAllHousehold(connection) {
    try {
        const query = `
        SELECT ho_khau.*, GROUP_CONCAT(CONCAT(thanh_vien_cua_ho.idNhanKhau, ':', nhan_khau.hoTen, ':', thanh_vien_cua_ho.quanHeVoiChuHo) SEPARATOR ',') AS householdMembers
        FROM ho_khau
        LEFT JOIN thanh_vien_cua_ho ON ho_khau.ID = thanh_vien_cua_ho.idHoKhau
        LEFT JOIN nhan_khau ON ho_khau.idChuHo = nhan_khau.ID
        GROUP BY ho_khau.ID
      `;

        const result = await executeQuery(connection, query);

        const updatedResult = result.map((element) => {
            const householdMembers = element.householdMembers;
            if (householdMembers) {
                element.householdMembers = householdMembers.split(',').map((member) => {
                    const [idNhanKhau, hoTen, quanHeVoiChuHo] = member.split(':');
                    return { idNhanKhau, hoTen, quanHeVoiChuHo };
                });
            } else {
                element.householdMembers = [];
            }
            return element;
        });

        // Retrieve names for household members
        const idNhanKhauList = updatedResult
            .flatMap((element) => element.householdMembers.map((member) => member.idNhanKhau))
            .filter((id, index, self) => self.indexOf(id) === index);
        const names = await getNamesForIds(connection, idNhanKhauList);

        // Assign names to household members
        updatedResult.forEach((element) => {
            element.householdMembers.forEach((member) => {
                member.hoTen = names[member.idNhanKhau];
            });
        });

        // Get number of household members
        updatedResult.forEach((element) => {
            element.numberOfMembers = element.householdMembers.length;
        });

        // Get name of chuHo
        updatedResult.forEach((element) => {
            const chuHoMember = element.householdMembers.find(
                (member) => member.quanHeVoiChuHo === 'Chủ hộ' || member.quanHeVoiChuHo === 'Chủ Hộ',
            );
            element.chuHo = chuHoMember ? chuHoMember.hoTen : '';
        });

        return updatedResult;
    } catch (error) {
        throw error;
    }
}

async function getNamesForIds(connection, idList) {
    const query = `
      SELECT ID, hoTen
      FROM nhan_khau
      WHERE ID IN (?)
    `;
    const result = await executeQuery(connection, query, [idList]);
    const names = {};
    result.forEach((row) => {
        names[row.ID] = row.hoTen;
    });
    return names;
}

// ...

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

async function createNewHousehold(body, connection, res) {
    try {
        console.log(body);
        const { maHoKhau, diaChi, ngayLap, chuHo, household } = body;
        const insertHoKhauQuery = 'INSERT INTO ho_khau (maHoKhau, idChuHo, diaChi, ngayLap) VALUES (?, ?, ?, ?)';
        await connection.query(insertHoKhauQuery, [maHoKhau, chuHo, diaChi, ngayLap], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const hoKhauId = result.insertId;

                const members = household.members;
                connection.query(`INSERT INTO thanh_vien_cua_ho (idNhanKhau, idHoKhau, quanHeVoiChuHo) VALUES (?, ?, 'Chủ hộ')`,
                    [chuHo, hoKhauId]);
                const insertMemberQuery =
                    'INSERT INTO thanh_vien_cua_ho (idNhanKhau, idHoKhau, quanHeVoiChuHo) VALUES (?, ?, ?)';
                for (const member of members) {
                    const { ID, quanhe } = member;
                    connection.query(insertMemberQuery, [ID, hoKhauId, quanhe], (error2, result2) => {
                        if (error2) {
                            console.log(error2);
                        }
                    });
                }

                res.status(200).json({ message: 'Thêm hộ khẩu mới thành công!' });
            }
        });
    } catch (error) {
        console.error('Error creating household:', error);
        res.status(500).json({ message: 'Có lỗi xảy ra!' });
    }
}

module.exports = {
    getAllHousehold,
    createNewHousehold,
};
