  let http = require('http');
  let myFecha = require("./fecha");
  var url = require('url');
  var fs = require('fs');




  http.createServer(function (ini, fin) {
     res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(ini.url);
    let usuario = {};
    var q = url.parse(ini.url, true).query;
    console.log(q)
    fs.readFile('./usuario.json','utf8', function(err, data) {
      usuario = JSON.parse(data);
   
      console.log(usuario.peso)
      fin.end('<h1>Hola '+q.nombre +' '+ q.apellido+' desde NodeJs! '+ usuario.edad +'</h1>');
  

      usuario.nombre = q.nombre;

//     fs.writeFile('./usuario.json', JSON.stringify(usuario), function (err) {
//       if (err) throw err;
//       console.log('Replaced!');
//     });

//   });

  
  

// }).listen(9000);

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
const absolute = path.join(__dirname, 'img')

http.createServer(function (req, res) {

  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      
      var newpath = absolute +'/'+ files.filetoupload.originalFilename;
        console.log(oldpath);
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });

    });
  

  }).listen(9000);

>>>>>>> fuentes/main
