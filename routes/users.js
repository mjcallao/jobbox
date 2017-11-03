var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.get('/finduser/:id', function(req, res) {
    var db = req.db;
    // var usuarioBuscar = req.params.id;
    var collection = db.get('userlist');
    // collection.find({'_id' : usuarioBuscar },{}, function(e,docs){
    collection.findOne({'_id' : req.params.id },{}, function(e,docs){
        res.json(docs);
    });
});


// router.get('/:userID/food/edit/:foodID', function(req, res){
//  //sample GET request at '/xavg234/food/edit/jb3552'

//  var userToFind = req.params.userID;//gets xavg234
//  var foodToSearch = req.params.foodID;//gets jb3552
//  User.findOne({'userid':userToFind}) //dummy code
//      .then(function(user){...})
//      .catch(function(err){console.log(err)});
// });



/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;