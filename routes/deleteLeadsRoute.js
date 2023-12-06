const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Lead = require('../model/Lead');

// Define route to delete data by ID
// Define route to delete multiple leads
router.post('/deleteleads', async (req, res) => {
    try {
      const leadIds = req.body;
      console.log(leadIds); // Assuming lead IDs are sent as an array in the request body
      await Lead.deleteMany({ _id: { $in: leadIds } });
      res.send('Leads deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting leads');
    }
  });
  
export default router

