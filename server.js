var express = require('express');

var app = express();

app.use(express.static(__dirname + '/client'));

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ..`);
});