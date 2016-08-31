var express = require('express');
var app = express();

app.use('/', express.static(__dirname));

app.listen(4444, function () {
    console.log("server listening on http://localhost:4444")
});
