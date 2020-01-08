const Item = require('./../models/Item');

module.exports = {
  async index(req, res) {
    const items = await Item.find();

    return res.json(items);
  },

  async store(req, res) {
    const { name } = req.body;

    const item = await Item.create({
      name,
    });

    return res.json(item);
  }
}
