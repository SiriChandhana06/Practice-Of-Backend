const express = require('express');
const Form = require('../Models/Form');

const router = express.Router();

// POST route to submit form data
router.post('/api/forms', async (req, res) => {
  const newForm = new Form(req.body);
  try {
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET route to fetch form data
router.get('/api/forms', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
