const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: { model: Product }
    });

    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});
  
// find a single tag by its `id`
router.get('/:id', async(req, res) => {
  try {
    const tagData = await Tag.findOne({
      where: {id: req.params.id},
      include: { model: Product},
    });

    if (!tagData) {
      res.status(404).json({message: 'No tag with m,atching ID found!'})
    }

    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});
  // create a new tag
router.post('/', async(req, res) => {
  try{
    const tagData = await Tag.create(req.body);

    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});
  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {id: req.params.id}
    });

    if(!tagData) {
      res.status(404).json({message: 'No tag with m,atching ID found!'})
    };

    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!tagData) {
        res.status(404).json({message: 'No tag with m,atching ID found!'})
      };

      res.status(200).json({message: 'Tag Deleted'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
