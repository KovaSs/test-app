const express = require('express');
const path = require('path');
const app = express();
const {articles} = require('./src/RoutingAndXHR/api/articles.json')
const {comments} = require('./src/RoutingAndXHR/api/comments.json')

if(process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/article(/*)', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
}

app.get('/api/articles', (req, res) => {
  res.status(200).json({articles});
})

app.get('/api/articles/:id/comments', (req, res) => {
  const artId = req.params.id
  const artCommets = comments.filter(comment => comment.articleId == artId)
  res.status(200).json({comments: artCommets});
})

app.listen(3000);

console.log('Serving from port 3000')