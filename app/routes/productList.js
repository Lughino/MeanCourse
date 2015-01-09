var registry = require('simple-registry');

// http://localhost:3000/products?category=phone
module.exports = function (req, res) {
    var db = registry.get('mongodbConnection');

    if (req.query.category == null || req.query.category.trim() == '') {
        return res.json({});
    }

    var category = req.query.category.trim();

    db.collection('products').find({ categories: category }).toArray(
        function(err, docs) {
            var returnList = [];
            var len = docs.length;
            for (var i = 0; i < len; i++) {
                returnList.push({
                    sku: docs[i].sku,
                    name: docs[i].name,
                    type: docs[i].type,
                    thumbnailImage: docs[i].thumbnailImage,
                    regularPrice: docs[i].regularPrice,
                    salePrice: docs[i].salePrice,
                    shortDescription: docs[i].shortDescription,
                    manufacturer: docs[i].manufacturer
                });
            }

            return res.json(returnList);
        }
    );
};