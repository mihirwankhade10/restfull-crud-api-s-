const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving items' });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId);
    if (!item) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.json(item);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the item' });
  }
};

exports.createItem = async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
    });

    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the item' });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItem = {
      name: req.body.name,
      description: req.body.description,
    };

    const item = await Item.findByIdAndUpdate(itemId, updatedItem, { new: true });
    if (!item) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.json(item);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the item' });
  }
};

exports.deleteItem = async (req, res) => {
    try {
      const itemId = req.params.id;
      const item = await Item.findByIdAndRemove(itemId);
      if (!item) {
        res.status(404).json({ error: 'Item not found' });
      } else {
        res.json({ message: 'Item deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the item' });
    }
  };
  
