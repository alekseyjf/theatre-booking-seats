module.exports = function(app) {
  let allSeats = [
    [
      true,true,true,true,
    ],
    [
      true,true,true,true,true,true
    ],
    [
      true,true,true,true,true,true
    ],
    [
      true,true,true,true,true,true,true,true,true,true
    ],
    [
      true,true,true,true,true,true,true,true,true,true
    ],
    [
      true,true,true,true,true,true,true,true
    ],
  ];

  app.get('/get-all-seats', (req, res) => {
    res.status(200).send({allSeats});
    return;
  });

  app.post('/booking', (req, res) => {
    allSeats = req.body;

    res.send({booked: true});
    return;
  });
  
  return app;
};