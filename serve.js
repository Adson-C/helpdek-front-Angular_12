const express = require('express');
const path = require('path');
const helpdeskApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/${helpdeskApp}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${helpdeskApp}/index.html`));
});

app.listen(process.env.PORT || 8080);