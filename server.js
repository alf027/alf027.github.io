var http = require('http'),
  url = require('url'),
  path = require('path'),
  fs = require('fs');


var mimeTypes = {
  "html": "text/html",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "png": "image/png",
  "js": "text/javascript",
  "css": "text/css"
};


var server = http.createServer(function(req, res) {
  var publicReq = {
    GET: function (filename,directory) {
      console.log(url.parse(req.url));
      console.log(directory);
      fs.readFile('./public/' + directory + '/' + filename, function (err, file) {
        if (err) {
          throw err;
        } else {
          var mimeType = mimeTypes[filename.split(".")[1]];
          res.writeHead(200, {'Content-Type':mimeType});
          res.end(file);
        }
      })
    }

  };


  if (req.url.split('/')[1] === 'public') {
    console.log(req.url.split('/'));
    //console.log(req.method);
    var directory = req.url.split('/')[2];
    var filename = req.url.split('/')[3];
    publicReq[req.method](filename,directory);
  //} else if (req.url === '/birds') {
  //  birdReq[req.method]();
  } else {
    fs.readFile('./index.html', function (err, file) {
      res.writeHead(200, {'Content-Type':"text/html"});
      res.end(file)
    })
  }
});

server.listen(8001, function () {
  console.log('listening on 8001');
});

