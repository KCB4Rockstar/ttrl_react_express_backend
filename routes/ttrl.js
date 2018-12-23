var express = require('express');
var router = express.Router();
var db = require('../dbconnection');
var storage = require('../storage');

/* GET users listing. */
router.get('/products', function(req, res, next) {
    db.query('SELECT * FROM ttrlProducts WHERE isDeleted=0', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

// router.post('/upload', function(req, res, next) {
//     console.log("wazzup");
//     let uploadFile = req.files.file;
//     const fileName = req.files.file.name;
//     uploadFile.mv(
//         `${__dirname}/public/files/${fileName}`,
//         function (err) {
//             if (err) {
//                 return res.status(500).send(err)
//             }
//
//             res.json({
//                 file: `public/${req.files.file.name}`,
//             })
//         },
//     )
// });

router.post('/upload', storage.single('selectedFile'), (req, res) => {
    /*
      We now have a new req.file object here. At this point the file has been saved
      and the req.file.filename value will be the name returned by the
      filename() function defined in the diskStorage configuration. Other form fields
      are available here in req.body.
    */
    res.send();
});

module.exports = router;