const express = require('express');
const router = express.Router();
const { 
  createRoom, 
  getAllRooms, 
  getRoomById, 
  updateRoom, 
  deleteRoom 
} = require('../controllers/Room.controllers'); 
// Routes
router.post('/create', createRoom);
router.get('/all', getAllRooms);
router.get('/:id', getRoomById);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);

module.exports = router;
