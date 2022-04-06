const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/transactionMatcher'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/transactionMatcher/index.html'));});
app.listen(process.env.PORT || 4200);