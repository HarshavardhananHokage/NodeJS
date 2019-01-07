var express = require('express');
var router = express.Router();
const notes = require('../models/notes-memory');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let keylist = await notes.keylist();
  let keyPromises = keylist.map((key) => {
    return notes.read(key);
  })

  let noteList = await Promise.all(keyPromises);
  res.render('index', { title: 'Notes', notelist: noteList });
});

module.exports = router;
