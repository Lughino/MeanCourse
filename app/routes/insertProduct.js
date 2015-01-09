var registry = require('simple-registry');

module.exports = function (req, res) {
    var db = registry.get('mongodbConnection');

    var fields = req.body.fields;
    // eseguo la validazione
    if (fields.sku == null || fields.sku.trim() == '') {
        return res.status(400).json({error: 'Param required' });
    }
    if (fields.productId == null || isNaN(fields.productId)) {
        return res.status(400).json({error: 'Param productId not valid' });
    }
    //validare tutti i campi

    // eseguo la query sul db
    db.collection('products').insert(fields,
        function(err, doc) {
            if(err) {
                return res.status(500).json({error: new Error('Error in mongodb insert')});
            }

            return res.json({ success: true });
        }
    );
};