import express from 'express';
import {createServer} from 'http';
import path from 'path';
import cors from 'cors';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

/// databse
// import mongoConnect from '../Database/database.js';
//

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const http = createServer(app);

app.use(cors());
app.use(express.json());

// let db;

try
{
    let server = http.listen(4000, async function () 
    {
        let host = server.address().address;
        let port = server.address().port;
        console.log("Server listening on: "+ "local host ::" + " port:" + port);
        console.log("Server status = 'GREEN'");
        // db = await mongoConnect();
    });
}
catch(error)
{
    console.error("error starting backend: ", error);
    console.log("Server status = 'RED'");
    throw (error);
}

// test webhook from clerk
app.post('/api/ping', async(req, res)=>
{
    return res.status(400);
});