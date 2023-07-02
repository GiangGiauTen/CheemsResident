import React, { useState, useEffect } from 'react'
import TiLeNamNu from './TiLeNamNu'
import DoTuoi from './DoTuoi'
import TamVang from './TamVang'
import { Card } from 'antd'
import TamTru from './TamTru'

const tabListNoTitle = [
	{
		key: '1',
		label: 'Tỉ lệ nam nữ',
	},
	{
		key: '2',
		label: 'Thống kê theo tuổi',
	},
	{
		key: '3',
		label: 'Danh sách tạm vắng',
	},
	{
		key: '4',
		label: 'Danh sách tạm trú',
	},
]

const contentListNoTitle = {
	1: <TiLeNamNu />,
	2: <DoTuoi />,
	3: <TamVang />,
	4: <TamTru />,
}
const Statistic = () => {
	const [activeTabKey, setActiveTabKey] = useState('1')
	const onTabChange = (key) => {
		setActiveTabKey(key)
	}

	return (
		<div>
			<Card
				style={{
					width: '100%',
				}}
				tabList={tabListNoTitle}
				activeTabKey={activeTabKey}
				onTabChange={onTabChange}>
				{contentListNoTitle[activeTabKey]}
			</Card>
		</div>
	)
}

/*
function Statistic() {
  const [form] = Form.useForm();
  const [populationData, setPopulationData] = useState([]);
  const [filteredPopulationData, setFilteredPopulationData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [minAge, setMinAge] = useState('0');
  const [maxAge, setMaxAge] = useState('100');
  const [invalidAge, setInvalidAge] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/resident/');
      if (response.status === 200) {
        const data = response.data.map(e => {
          e['key'] = e['ID'];
          return e;
        });
        setPopulationData(data);
        setFilteredPopulationData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = value => {
    const filteredData = populationData.filter(item =>
      item.hoTen.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPopulationData(filteredData);
  };

  const handleFilterIconClick = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    setModalVisible(false);
    // Apply selected criteria and update the filtered data accordingly
    const filteredData = populationData.filter(item =>
      selectedCriteria.includes(item.criteriaField) // Replace 'criteriaField' with the actual field name
    );
    setFilteredPopulationData(filteredData);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleMaxAgeChange = e => {
    const value = e.target.value;
    if (value <= 100) {
      setMaxAge(value);
      setInvalidAge(false);
    } else {
      setInvalidAge(true);
    }
  };

  const renderDateOfBirth = (text, record) => {
    const date = new Date(text);
    const formattedDate = date.toLocaleDateString('en-US');
    return <span>{formattedDate}</span>;
  };

  const columns = [
    {
      title: 'Họ và tên',
      dataIndex: 'hoTen',
      sorter: (a, b) => a.hoTen.localeCompare(b.hoTen),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'namSinh',
      render: renderDateOfBirth,
    },
    {
      title: 'Giới tính',
      dataIndex: 'gioiTinh',
      filters: [
        { text: 'Nam', value: 'Nam' },
        { text: 'Nữ', value: 'Nữ' },
      ],
      onFilter: (value, record) => record.gioiTinh === value,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'diaChi',
    },
    {
      title: 'Quê quán',
      dataIndex: 'queQuan',
    },
  ];

  return (
    <div>
      <h1>Thống kê nhân khẩu</h1>
      <Form form={form} layout="vertical">
        <Form.Item label="Tìm kiếm">
          <Search
            placeholder="Nhập từ khóa tìm kiếm"
            allowClear
            enterButton="Tìm kiếm"
            size="large"
            onSearch={handleSearch}
          />
        </Form.Item>
      </Form>
      <div style={{ marginBottom: '16px' }}>
        <Button
          type="primary"
          icon={<FilterOutlined />}
          onClick={handleFilterIconClick}
        >
          Lọc dữ liệu
        </Button>
      </div>
      <Table columns={columns} dataSource={filteredPopulationData} />

      <Modal
        title="Chọn tiêu chí thống kê"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Checkbox.Group onChange={values => setSelectedCriteria(values)}>
          <div>
            <h3>Giới Tính</h3>
            <Checkbox value="criteriaField1">Toàn bộ</Checkbox>
            <Checkbox value="criteriaField2">Nam</Checkbox>
            <Checkbox value="criteriaField3">Nữ</Checkbox>
            <Checkbox value="criteriaField4">Khác</Checkbox>
          </div>
          <div>
            <h3>Tình Trạng</h3>
            <Checkbox value="criteriaField5">Toàn bộ</Checkbox>
            <Checkbox value="criteriaField6">Tạm Vắng</Checkbox>
            <Checkbox value="criteriaField7">Khai Tử</Checkbox>
            <Checkbox value="criteriaField8">Thường Trú</Checkbox>
            <Checkbox value="criteriaField9">Tạm Trú</Checkbox>
          </div>
          <div>
            <h3>Tiêu chí độ tuổi</h3>
            <Input.Group compact>
              <Input
                style={{ width: '50%' }}
                placeholder="Từ"
                value={minAge}
                onChange={e => setMinAge(e.target.value)}
              />
              <Input
                style={{ width: '50%' }}
                placeholder="Đến"
                value={maxAge}
                onChange={handleMaxAgeChange}
              />
            </Input.Group>
            {invalidAge && <p style={{ color: 'red' }}>Độ tuổi không hợp lệ</p>}
          </div>
        </Checkbox.Group>
      </Modal>
    </div>
  );
}
*/
export default Statistic
