var registry = require('simple-registry');
var db = registry.get('mongodbConnection');

module.exports = function (req, res) {
    var fields = req.body.fields;
    // eseguo la validazione
    if (fields.sku == null || fields.sku.trim() == '') {
        return res.status(400).json({error: 'Param required' });
    }
    if (fields.name == null || fields.name.trim() == '') {
        return res.status(400).json({error: 'Param name not valid' });
    }
    //validare tutti i campi

    // eseguo la query sul db
    db.collection('products').remove({"sku": fields.sku},
        function(err, doc) {
            if(err) {
                return res.status(500).json({error: new Error('Error in mongodb remove')});
            }

            return res.json({ success: true });
        }
    );
};