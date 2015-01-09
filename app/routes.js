/**
 * @author Luca Pau <luca.pau82@gmail.com>
 */

var indexCtrl = require('./routes/index');
var categoryListCtrl = require('./routes/categoryList');
var productListCtrl = require('./routes/productList');
var productCtrl = require('./routes/product');
var insertProductCtrl = require('./routes/insertProduct');
var updateProductCtrl = require('./routes/updateProduct');
var deleteProductCtrl = require('./routes/deleteProduct');

module.exports = function(app) {
    app.get('/', indexCtrl);
    app.get('/api/v1/categories', categoryListCtrl);
    app.get('/products', productListCtrl);
    app.get('/product', productCtrl);
    app.post('/product/new', insertProductCtrl);
    app.post('/product/update', updateProductCtrl);
    app.post('/product/delete', deleteProductCtrl);
};