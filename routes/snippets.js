const router = require('express').Router();
const bodyParser = require('body-parser');
const Snippet = require('../models/snippet');


router.post('/createASnippet', (req, res) => {
  const snippet = new Snippet ({
    title: req.body.title,
    codeBody: req.body.codeBody,
    language: req.body.language,
    notes: req.body.notes,
    tag: req.body.tag
  });
  console.log('create a snipper',req.body.title);
  snippet.save((err) => {
    if(err) {
      req.flash('there was a problem in saving a snippet.');
    }
  });
  res.redirect('mySnippets');
});


router.get('/mySnippets', (req, res) => {
  Snippet.find({}, (err, snippets) => {
    if(err) {
      req.flash('there was a problem in saving a snippet.');
    } else {
      let data = {snippets};
      console.log(data);
    res.render('mySnippets', data)
    }
  })
});

router.get('/createASnippet', (req, res) => {
  res.render('createASnippet');
});



router.get('/findASnippetbyTitle', (req, res) => {
let findByTitle = Snippet.find(findSnippetByTitle, searchQuery);
 console.log(JSON.stringify(findByTitle));

function findSnippetByTitle (findByTitle) {
  if (`findByTitle.${searchQuery}` === `req.body.${searchQuery}`) {
    let returnedSnippet = {snippets};
    res.render('mySnippets', returnedSnippet);
  }
  }
})

module.exports = router;
