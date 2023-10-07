const express = require('express');
const {
  GetTourById,
  GetAllTours,
  AddNewTour,
  DeleteTourById,
  UpdateTourById,
} = require('../controllers/tourControllers');

const router = express.Router();

// router.param('id', CheckId);

router.route('/').get(GetAllTours).post(AddNewTour);
router
  .route('/:id')
  .get(GetTourById)
  .patch(UpdateTourById)
  .delete(DeleteTourById);

module.exports = router;
