const express = require('express');

const router = express.Router();

const { createRoom, createBooking, createCustomer, getAllRooms, getAllCustomers, getAllBookings} = require('../controller/Controller');
router.post('/createroom',  createRoom);
router.post('/createcustomer', createCustomer);
router.post('/createbooking', createBooking);
router.get('/getallrooms', getAllRooms);
router.get('/getallcustomers', getAllCustomers);
router.get('/getallbookings', getAllBookings);


module.exports = router;