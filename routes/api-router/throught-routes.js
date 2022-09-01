router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addNewReaction,
  removeReaction
} = require('../../controllers/hhs_thoughts_controller.js');

// /api/Thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// /api/Thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(addNewReaction)
  .delete(removeReaction);

module.exports = router;