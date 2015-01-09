/**
 * Created by Luca Pau on 09/01/15.
 */

// piccoli esempi sparsi

var fs = require('fs');

fs.unlink('/tmp/hello', function (err) {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});

// sync
fs.unlinkSync('/tmp/hello')
console.log('successfully deleted /tmp/hello');

fs.rename('/tmp/hello', '/tmp/world', function (err) {
  if (err) throw err;
  fs.stat('/tmp/world', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});

fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  console.log(data);
});

fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

fs.appendFile('message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

fs.exists('/etc/passwd', function (exists) {
  console.log(exists ? "it's there" : "no passwd!");
});

fs.readdir('path/to/read', function(err, files) {
  if(err) {
    throw err;
  }
  console.log(files);
});

fs.mkdir('path/to/create', 0777, function(err) {
  if(err) {
    if(err.code === 'EEXIST') {
      throw new Error('Folder exists');
    } else {
      throw new Error('Creation folder error');
    }
  }
  console.log('SUCCESS');
});

// rimraf, modulo per cancellazione ricorsiva dei file dentro una cartella
rimraf('path/to/remove', function(err) {
  if(err) {
    throw new Error('Delete folder error or directory not exists');
  }
  console.log('SUCCESS');
});