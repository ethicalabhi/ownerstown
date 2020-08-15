var port = 3000;
var http = require("http");
var server = http.createServer();
server.on('request', request);
server.listen(port);
function request(request, response) {
    var store = '';
    request.on('data', function(data) {
      store += data;
    });
    request.on('end', function(){  
        var code = JSON.parse(store);
        var NameGenerator = require("./modules/Log");
        generatedName = NameGenerator.generate(code.dial_code);
        my_dict = NameGenerator.getDictionary();
        console.log(generatedName);
        findMatch = NameGenerator.print1(generatedName,my_dict);
        console.log(findMatch);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        code['msg']=findMatch;
        response.end(JSON.stringify(code));
    });
 } 