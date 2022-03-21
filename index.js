  const express = require('express')
  app = express()
  port = process.env.PORT || 6789
  mongoose = require('mongoose');
  const uri = 'mongodb://localhost/Jeuxdb';
  Personnage = require('./src/models/personnage.model')

  mongoose.connect(uri, {
        useNewUrlParser: true,
        
        useUnifiedTopology: true
                }).then(res=>{
                console.log("DB en place")
                        }).catch(err => {
                        console.log(Error, err.message);
                      });

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json());const routes = require('./src/routes/personnage.router');

  routes(app);
  app.get('/', function(req, res) {
    res.send('Bienvenue sur kgamer vous pouvez découvrir et créer votre personnage ainsi que ses armes etc!');
  });
  
  app.get('*', (req, res)=>{
  res.status(404).send({url: req.originalUrl + ' not found'})
  })
  
  app.listen(port);
  console.log('Bienvenue sur kgamer: ' + port);