const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const nodemailer = require('nodemailer');

const uri = "mongodb+srv://tsimafei:dataformeower123@cluster0.muwtv.mongodb.net/contacts?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true});

const app = express();

app.use(cors());
app.use(express.json());

function isValidName(contact) {
  return contact.lastName && contact.lastName.toString().trim() !== ''
  && contact.firstName && contact.firstName.toString().trim() !== '';
}

function isValidMail(contact) {
  let mail = contact.mail.toString();
  for(var i = (mail.length-1); i>0; i--){
    if(mail[i] === '@'){
      return true;
    }
  }
  return false;
}

client.connect(err => {

  const contacts = client.db('contacts').collection('contacts');

  app.get('/', (req,res) => {
    res.json({
      message: 'frontend project server'
    });
  });

  app.post('/contacts', (req,res) => {
    if(isValidName(req.body) && isValidMail(req.body)) {
      let lastNameString = req.body.lastName.toString();
      let firstNameString = req.body.firstName.toString();
      let mailString = req.body.mail.toString();

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '',
          password: ''
        }
      });

      let mailOptions = {
        from: '',
        to: '',
        subject: '',
        text: ''
      };

      transporter.sendMail(mailOptions, function(err,info){
        if(err){
          console.log(err);
        } else {
          console.log(info);
        }
      });

      const contact = {
        lastname: lastNameString,
        firstname: firstNameString,
        mail: mailString,
        created: new Date()
      };
      contacts.insertOne(contact);
    } else {
      res.status(422);
      res.json({
        message: 'We have a problem with you data!'
      });
    }
  });


  app.listen(5000, () => {
    console.log('Listening');
  });

});
