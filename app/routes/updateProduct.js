var registry = require('simple-registry');

module.exports = function (req, res) {
    var db = registry.get('mongodbConnection');

    var fields = req.body.fields;
    // eseguo la validazione
    if (fields.sku == null || fields.sku.trim() == '') {
        return res.status(400).json({error: 'Param required' });
    }
    if (fields.name == null || fields.name.trim() == '') {
        return res.status(400).json({error: 'Param name not valid' });
    }

    // eseguo la query sul db
    db.collection('products').update({"sku": fields.sku}, { $set: { name: fields.name } },
        function(err, doc) {
            if(err) {
                return res.status(500).json({error: new Error('Error in mongodb insert')});
            }
            // doc è l'oggetto modificato

            return res.json({ success: true });
        }
    );
};