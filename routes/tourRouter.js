const express = require('express');
const {
  GetTourById,
  GetAllTours,
  AddNewTour,
  DeleteTourById,
  UpdateTourById,
  aliasTopTours,
} = require('../controllers/tourControllers');

const router = express.Router();

// router.param('id', CheckId);

router.route('/top-5-cheap').get(aliasTopTours, GetAllTours);

router.route('/').get(GetAllTours).post(AddNewTour);
router
  .route('/:id')
  .get(GetTourById)
  .patch(UpdateTourById)
  .delete(DeleteTourById);

module.exports = router;
