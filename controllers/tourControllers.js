const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
);

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'failed',
      message: 'missing key name or price',
    });
  }
  next();
};

exports.CheckId = (req, res, next, val) => {
  if (req.params.id * 1 > tours[tours.length - 1].id) {
    return res.status(404).json({
      status: 'failed',
      message: 'invalid id',
    });
  }
  next();
};

exports.GetAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', results: tours.length, data: { tours } });
};

exports.GetTourById = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: { tour },
  });
};

exports.AddNewTour = (req, res) => {
  //console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { tour: newTour },
      });
    },
  );
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
