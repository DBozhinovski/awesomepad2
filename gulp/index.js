var fs = require('fs');
var tasks = fs.readdir('./gulp/tasks/', function(error, files){
  files.forEach(function(task){
    require('./tasks/' + task);
  });
});
