var registry = require('simple-registry');

// http://localhost:3000/categories?filter=phone
module.exports = function(req, res) {
var db = registry.get('mongodbConnection');
  db.collection('categories').findOne(
      function(err, doc) {
        if(err) {
          return res.status(500).json({error: new Error('Error in mongodb find')});
        }
        delete doc._id;

        if (req.query.filter == null || req.query.filter.trim() == '') {
          return res.json(doc);
        }
        var filter = req.query.filter.trim().toLowerCase();
        var returnList = {};
        for (var key in doc) {
          if (doc[key].toLowerCase().indexOf(filter) >= 0) {
            returnList[key] = doc[key];
          }
        }

        return res.json(returnList);
      }
  );
};