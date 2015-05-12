var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send("display a list of all posts")
})

router.get('/new', function(req, res) {
  res.send("return an HTML form for creating a new post")
})

router.post('/', function(req, res) {
  res.send("create a new post")
})

router.get('/:id', function(req, res) {
  var id = req.params.id
  res.send("display a specific post with id " + id)
})

router.get('/:id/edit', function(req, res) {
  var id = req.params.id
  res.send("return an HTML form for editing a post with id " + id)
})

router.put('/:id', function(req, res) {
  var id = req.params.id
  res.send("update a specific post with id " + id)
})

router.delete('/:id', function(req, res) {
  var id = req.params.id
  res.send("delete a specific post with id " + id)
})

router.get('/:id/comments', function(req, res) {
  var id = req.params.id
  res.send("display a list of all comments for a post with id " + id)
})

router.get('/:id/comments/new', function(req, res) {
  var id = req.params.id
  res.send("return an HTML form for creating a new comment for a post with id " + id)
})

router.post('/:id/comments', function(req, res) {
  var id = req.params.id
  res.send("create a new comment for a post with id " + id)
})

router.get('/:id/comments/:cid', function(req, res) {
  var id = req.params.id
  var cid = req.params.cid
  res.send("display a specific comment with cid " + cid + " for a post with id " + id)
})

router.get('/:id/comments/:cid/edit', function(req, res) {
  var id = req.params.id
  var cid = req.params.cid
  res.send("return an HTML form for editing a comment with cid " + cid + " for a post with id " + id)
})

router.put('/:id/comments/:cid', function(req, res) {
  var id = req.params.id
  var cid = req.params.cid
  res.send("update a specific comment with cid " + cid + " for a post with id " + id)
})

router.delete('/:id/comments/:cid', function(req, res) {
  var id = req.params.id
  var cid = req.params.cid
  res.send("delete a specific comment with cid " + cid + " for a post with id " + id)
})

module.exports = router;