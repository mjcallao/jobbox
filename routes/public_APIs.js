var fs = require('fs');
//Ubicación de los modelos
var routePath = __dirname + '/../models/';

module.exports = function (app) {

    //Declaramos cuales models queremos que tengan una API pública.
    var modelNames = [
        'UserModel',
        'BookModel'
        
    ];

    /**
     * Iteramos el listado de modelos, los cargamos y usamos su
     * nombre (de modelo) para crear las URL's:
     *  /modelname [método GET] (list)
     *  /modelname/:id [método GET] (read)
     *  /modelname [método POST] (create)
     *  /modelname/:id [método DELETE] (delete)
     *  /modelname/:id [método PUT] (update)
     */
    modelNames.forEach(function (model_name) {

        var model = require(routePath + model_name + '.js');

        app.get("/" + model.modelName, function (req, res) {
            return model.find({}, function (err, data) {
                return res.json(data);
            });
        });

        app.get("/" + model.modelName + "/:id", function (req, res) {
            return model.findById(req.params.id, function (err, data) {
                return res.json(data);
            });
        });

        app.post("/" + model.modelName, function (req, res) {
            return new model(req.body).save(function (err, data) {
                return res.json(data);
            });
        });

        app.del("/" + model.modelName + "/:id", function (req, res) {
            return model.remove({_id: req.params.id}, function (err, count) {
                return res.json({count: count});
            });
        });

        app.put("/" + model.modelName + "/:id", function (req, res) {
            return model.update({_id: req.params.id}, req.body, {multi: false}, function (err, count) {
                return res.json({count: count});
            });
        });

    });

};