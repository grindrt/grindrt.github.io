import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import App from '../client/components/App/App';
import path from 'path';

const port = 7777;
const app = express();

const manifest = JSON.parse(fs.readFileSync(path.resolve('./public/manifest.json'), 'utf8'));

app.use(express.static('oublic'));

app.get('*', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  const renderedHTML = `
    <!DOCTYPE html>
      <head>
        <meta charset="utf-8" />
        <title>FrontCamp3</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossorigin="anonymous" />
        <link rel="stylesheet" href="/style.css" />
      </head>
    <body>
    <div id="app">${renderToString(<App />)}</div>
    </body>
    <script src="./${manifest['vendor.js']}"></script>
    <script src="./${manifest['main.js']}"></script>
    </html>`
  ;
  res.send(renderedHTML);
});

app.listen(port, () => console.log('Listening on port ' + port));
