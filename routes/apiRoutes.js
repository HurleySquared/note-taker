const noteData = require('../db/db.json');
const fs = require('fs');
const uuid = require('uuid');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => res.json(noteData));

  app.post('/api/notes', (req, res) => {
      const newId = uuid;
      req.body['id'] = newId;
      noteData.push(req.body);
      res.json(true);
      fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
  });

  app.delete('/api/notes', (req, res) => {
      noteData.splice(0, 1);
      res.json(true);
  });
};
