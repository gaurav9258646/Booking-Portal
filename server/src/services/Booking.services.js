const Bookings = require("../model/Bookings");


const createbookingDB = async(bookinData)=>{
    const Booking = new Bookings(bookinData);
    return await Booking.save()

};
const  getAllBookingDB  = async()=>{
    return await  Bookings.find();
};

const getbookingbyidDB = async(id)=>{
    return await Bookings.findById(id)

};

const updatabookingDB = async(id)=>{
    return await Bookings.findByIdAndUpdate(id);
}

const deletebookingDB = async(id)=>{
    return await Bookings.findByIdAndDelete(id)
}
module.exports ={createbookingDB,getAllBookingDB,getbookingbyidDB,updatabookingDB,deletebookingDB}