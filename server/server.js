
const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//const port = process.env.PORT || 3000;



app.get('/usuarios', (req, res) => {
    res.json('get funcionando')
  })
   
app.post('/usuarios', (req, res) => {

    let body = req.body
    res.json(body)
});

app.put('/usuarios/:id', (req, res)=>{

    let id = req.params.id;
    res.json({
        id
    });
});


app.delete('/usuarios', (req, res) => {
    res.json('delete funcionando')
    
});

  app.listen(3000, ()=>{
      console.log('escuchando por puerto 3000')
  })


