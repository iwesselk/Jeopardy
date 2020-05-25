const express = require('express');
const path = require('path');
const JepAPI = require('./ExpressApp/JepAPI');
const app = express();
// TODO: Adapt to dev/prod settings
const port = 3000;
app.use('/api/', JepAPI);
app.use('/static', express.static(path.join(process.cwd(),"/build/static")));
app.use(express.static(path.join(process.cwd(),"/StaticContent")));
app.get('/', (req, res) => res.sendFile("./build/index.html", options={root:process.cwd()}))
app.get('/carousel', (req, res) => res.sendFile("./build/index.html", options={root:process.cwd()}))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))