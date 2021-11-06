const RoomSchema = require('../models/Room')
const CustomerSchema = require('../models/Customer')
const BookingSchema = require('../models/Booking')


// create Room
const createRoom = async (req, res) => {
    try {
        console.log(req.body);
        const { id, name, numberOfSeats, price, amenities } = req.body;
        const room = new RoomSchema({
            id,
            name,
            numberOfSeats,
            price,
            amenities
        });
        console.log(room);
        const savedRoom= await room.save();
        console.log(savedRoom);
        res.json(savedRoom);
    }
    catch (err) {
        console.log(err);
        res.status(500).send();
    }
}


// create Customer
const createCustomer = async (req, res) => {
    try {
        console.log(req.body);
        const { id, name } = req.body;
        const customer = new CustomerSchema({
            id,
            name
        });
        console.log(customer);
        const savedCustomer= await customer.save();
        console.log(savedCustomer);
        res.json(savedCustomer);
    }
    catch (err) {
        console.log(err);
        res.status(500).send();
    }
}


// create Booking
const createBooking = async (req, res) => {
    try {
        console.log(req.body);
        const { id, custId, custName, roomId, date, startTime, endTime } = req.body;

        let tempDate = new Date(date)
        tempDate+= ''
        
        let existingBookingData = await BookingSchema.find();

        existingBookingData.forEach((eachBooking) => {
            if(eachBooking.id === id)
                throw "Booking with same id exists!"

            if(eachBooking.roomId === roomId && eachBooking.date+'' == tempDate )
            {
                if(startTime == undefined || endTime == undefined)
                    throw "Booking already exists for this room on the same date!"
                else if ( (startTime >= eachBooking.startTime && startTime <= eachBooking.endTime) || (startTime <= eachBooking.startTime && endTime >=eachBooking.endTime ) )
                    throw "Booking already exists for this room on same date and time!"

            }
        })

        const booking = new BookingSchema({
            id, custId, custName, roomId, date, startTime, endTime 
        });

        ;
        const savedBooking= await booking.save();
        res.json(savedBooking);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}




// used to get all rooms
const getAllRooms = async (req, res) => {
    try {
        const roomData = await RoomSchema.find();   
        res.json(roomData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// used to get all customers
const getAllCustomers = async (req, res) => {
    try {
        const custData = await CustomerSchema.find();
        res.json(custData)
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// used to get all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await BookingSchema.find();
        res.json(bookings)
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}



module.exports = { createRoom, createBooking, createCustomer, getAllRooms, getAllCustomers , getAllBookings};