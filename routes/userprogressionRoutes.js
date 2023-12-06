
import auth from '../middlewares/auth'


const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.post('/user-progression', async (req, res) => {
  const { Name } = req.body;
  
  const user = await User.default.findOne({Name:Name});
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  

  res.json(user);
});

export default router

