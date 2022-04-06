const express = require('express');
//const path = require('path');
const app = express();
//((app.use(express.static(__dirname + '/dist/transaction-matcher'));
//app.get('/*', function(req,res) {
//res.sendFile(path.join(__dirname+
//'/dist/transaction-matcher/index.html'));});
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);