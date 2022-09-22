const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(`
<h1>AWS DevOps course</h1>
<h2>Full pipeline test</h2>
`));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
