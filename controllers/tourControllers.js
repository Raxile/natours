const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'failed',
      message: 'missing key name or price',
    });
  }
  next();
};

exports.GetAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    //  results: tours.length, data: { tours }
  });
};

exports.GetTourById = (req, res) => {
  // const id = req.params.id * 1;
  // // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   // data: { tour },
  // });
};

exports.AddNewTour = (req, res) => {
  //console.log(req.body);
  res.status(201).json({
    status: 'success',
    // data: { tour: newTour },
  });
};

exports.UpdateTourById = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tour: '<UPDATE TOURS>' },
  });
};
exports.DeleteTourById = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
