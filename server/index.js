const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://tsimafei:dataformeower123@cluster0.muwtv.mongodb.net/contacts?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true});

const app = express();

app.use(cors());
app.use(express.json());

client.connect(err => {

  const contacts = client.db('contacts').collection('contacts');

  app.get('/', (req,res) => {
    res.json({
      message: 'frontend project server'
    });
  });

  app.post('/contacts', (req,res) => {
    
  });


  app.listen(5000, () => {
    console.log('Listening');
  });

});
