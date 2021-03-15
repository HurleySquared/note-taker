const noteData = require('../db/db.json');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => res.json(noteData));

  app.post('/api/notes', (req, res) => {
      noteData.push(req.body);
      res.json(true);
  });

  app.delete('/api/notes', (req, res) => {
      noteData.splice(0, 1);
      res.json(true);
  });
};
