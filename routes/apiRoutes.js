const noteData = require('../db/db.json');
const fs = require('fs');
// const uuid = require('uuid');
const {v4: uuid} = require('uuid');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => res.json(noteData));

  app.post('/api/notes', (req, res) => {
      const newId = uuid();
      console.log(newId);
      req.body['id'] = newId;
      noteData.push(req.body);
      fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
      res.json(true);
  });

  app.delete('/api/notes/:id', (req, res) => {
      const deleteId = req.params.id;
      function idCheck(element) {
        if (element.id !== deleteId) {
          return element;
        }
      };
      const index = noteData.filter(idCheck);
      fs.writeFileSync('./db/db.json', JSON.stringify(index, null, 2), err => {
        if (err) throw err || noteData.push(index);
      });
      res.json(true);
  });
};
