const express = require('express');
const config = require('config');
const ObjectId = require('mongodb').ObjectId;
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Property = require('../../models/Property');
const auth = require('../../middleware/auth');

// @route   POST /properties
// @desc    Create Property with "address":"123 Test Ave.", "city":"San Antonio", "state": "TX", "zip": "78222"
// @access  Private
router.post('/', auth, async (req, res) => {
  const { address, city, state, zip } = req.body;
  let property;
  console.log(req.body);
  try {
    property = new Property({
      address,
      city,
      state,
      zip,
    });
    await property.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Property Error');
  }

  console.log('Saved: ' + address + ' ' + city + ' ' + state + ' ' + zip);
  res.status(200).json({ message: 'added' });
});

// @route   GET /properties
// @desc    Test route
// @access  Public
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().populate('property', [
      'id',
      'address',
      'zip',
    ]);
    res.json(properties);
  } catch (error) {
    console.error(error.message);
    res.status(400).send('Server Property Error');
  }
});

// @route   GET /properties/:id
// @desc    gets the property<id>
// @access  Public
router.get('/:property_id', async (req, res) => {
  try {
    const property = await Property.findOne({
      _id: req.params.property_id,
    }).populate('property', ['id', 'address', 'city', 'zip']);

    console.log(property);
    res.json({ property });
    if (!property) {
      res.status(404).json({ message: "Property Doesn't Exist" });
    }
  } catch (error) {
    res.status(400).send({
      message: `Bad Request if '${req.params.property_id}' is not an integer`,
    });
  }
});

// @route    DELETE /properties/:id
// @desc    deletes the property<id>
// @access  Private
router.delete('/:property_id', auth, async (req, res) => {
  try {
    let property = await Property.findOne({ _id: req.params.property_id });
    if (property) {
      const property = await Property.findOneAndRemove({
        _id: req.params.property_id,
      });
      res.status(200).json({ message: 'deleted' });
    } else {
      res.status(404).json({ message: "Property Doesn't Exist" });
    }
  } catch (error) {
    res.status(400).send({
      message: `Bad Request if '${req.params.property_id}' is not an integer`,
    });
  }
});
// @route   POST /properties/:id
// @desc    Updates Property with "address":"123 Test Ave.", "city":"San Antonio", "state": "TX", "zip": "78222"
// @access  Public
router.put('/:property_id', auth, async (req, res) => {
  const { address, city, state, zip } = req.body;
  try {
    let updateProperty = new Property({ address, city, state, zip });
    let property = await Property.findOne({ _id: req.params.property_id });

    if (property) {
      property = await Property.updateOne(
        { _id: req.params.property_id },
        { $set: updateProperty },
        { new: true }
      );

      res.status(200).json({ message: 'updated' });
    } else {
      res.status(404).send({ message: 'Property Doesnt exist' });
    }
  } catch (error) {
    // console.error(error.message);
    res.status(400).send({
      message: `Bad Request if '${req.params.property_id}' is not an integer`,
    });
  }
});

module.exports = router;
