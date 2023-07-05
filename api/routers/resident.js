const express = require('express')
const { AddNewResident } = require('../controller/Resident/AddNewResident.js')
const { getAllResident, getAllResidentWithoutHouseHold } = require('../controller/Resident/Resident.js')
const { CheckIdentityCard } = require('../controller/Resident/CheckIdentityCard.js')
const { AbsentRegister, GetAllAbsentRegister } = require('../controller/Resident/AbsentRegister.js')
const {
	TemporaryResidentRegister,
	GetAllTemporaryResident,
} = require('../controller/Resident/TemporaryResidentRegister.js')
const { DeathNotify } = require('../controller/Resident/DeathNotify.js')
const router = express.Router()

module.exports = (connection) => {
	// POST /api/resident/add
	router.post('/add', async (req, res) => {
		await AddNewResident(req.body, connection, res)
	})
	// GET /api/resident/
	router.get('/', async (req, res) => {
		await getAllResident(connection, res)
	})
	router.get('/residentsWithoutHouseHold', async (req, res) => {
		await getAllResidentWithoutHouseHold(connection, res)
	})

	// POST /api/resident/checkIdentityCard
	router.post('/checkIdentityCard', async (req, res) => {
		await CheckIdentityCard(req.body, connection, res)
	})

	// POST /api/resident/absentRegister
	router.post('/absentRegister', async (req, res) => {
		await AbsentRegister(req.body, connection, res)
	})
	// GET /api/resident/absentRegister
	router.get('/absentRegister', async (req, res) => {
		await GetAllAbsentRegister(connection, res)
	})

	// POST /api/resident/temporaryResident
	router.post('/temporaryResident', async (req, res) => {
		await TemporaryResidentRegister(req.body, connection, res)
	})
	// POST /api/resident/temporaryResident
	router.get('/temporaryResident', async (req, res) => {
		await GetAllTemporaryResident(connection, res)
	})

	// POST /api/resident/deathNotify
	router.post('/deathNotify', async (req, res) => {
		await DeathNotify(req.body, connection, res)
	})

	return router
}
