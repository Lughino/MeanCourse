var registry = require('simple-registry');

// http://localhost:3000/categories?filter=phone
module.exports = function (req, res) {
    var db = registry.get('mongodbConnection');

    // eseguo la validazione
    if (req.query.sku == null || req.query.sku.trim() == '') {
        return res.status(400).json({error: 'Param required' });
    }

    // eseguo la query sul db
    db.collection('products').find({ "sku": req.query.sku }).toArray(
        function(err, docs) {
            if(err) {
                return res.status(500).json({error: new Error('Error in mongodbfind')});
            }
            var len = docs.length;
            for (var i = 0; i < len; i++) {
                if (docs[i].sku == req.query.sku) {
                    return res.json(docs[i]);
                }
            }
            return res.status(404).json({error: 'Not found.' });
        }
    );
};