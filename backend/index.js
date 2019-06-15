const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

const items = {
  'aa': {
    label: 'Go to store',
    'is-completed': false,
  },
  'bb': {
    label: 'Finish todo app',
    'is-completed': true,
  }
};

app.get('/items', (req, res) => {
  const itemsArr = Object.keys(items).map(id => ({
    id,
    type: 'item',
    attributes: items[id],
  }))

  console.log('Request for all items!', items)

  res.send({ data: itemsArr });
})

app.get('/items/:id', (req, res) => {
  const {id} = req.params;

  res.send({
    data: {
      id,
      type: 'item',
      attributes: items[id]
    }
  })
})

app.patch('/items/:id', (req, res) => {
  const {id} = req.params;
  const {attributes} = req.body.data;

  items[id] = attributes;

  console.log(attributes)

  res.send({
    data: {
      id,
      type: 'item',
      attributes: items[id],
    }
  })
})

app.post('/items', (req, res) => {
  const {item} = req.body;

  console.log(req);
  console.log('\n\n\nBody', req.body);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

