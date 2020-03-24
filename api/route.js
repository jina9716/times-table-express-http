'use strict';

module.exports = function(app){
  const tt = require('./times-table');
  app.route('/').get(function(req, res){
    const num = Number(req.query.num);
    const type = req.query.type;
    if (Number.isInteger(num)) {
      const result = tt.timesTable(num);
      if (type == "json") {
        res.set('Content-Type', 'application/json');
      }
      res.send(result);
    } else {
      res.status(400).send("ERROR");
    }
  });
};