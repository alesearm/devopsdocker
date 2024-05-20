'use strict';

const express = require('express');

// Constants
const PORT = 8060;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello FS2024 DevOps Course! :-))) Hallo Zusammen. Ich heisse Armin (((-:');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
