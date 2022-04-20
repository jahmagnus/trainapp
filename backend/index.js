import dotenv from 'dotenv';
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
import fetch  from 'node-fetch'

dotenv.config()

const port = 5000


//create the server instance and assign the port
app.listen(port, ()=> {
    console.log(`Listening on ${port}`);
});

app.use(express.urlencoded({
    extended: true
}));

//serve static pages from the folder public
//app.use(express.static('public'));

//limit request data sizes to prevent flooding
app.use(express.json({
    limit: '1mb'
}));



app.get('/trains', async (request, response) => {

    const apiKey = process.env.API_KEY
    const appID = "b74798d6";
    const stationCRS = "WHP"; //west hampstead thameslink
    const calling_at = "STP"; //St Pancras
    const baseURL = "https://transportapi.com/v3/uk/train/station/WHP/live.json?";


    const api_url = `https://transportapi.com/v3/uk/train/station/${stationCRS}/live.json?app_id=${appID}&app_key=${apiKey}&darwin=false&calling_at=${calling_at}&train_status=passenger`;
    const fetch_response = await fetch(api_url);
    const trainData = await fetch_response.json();
    response.send(trainData)

});




//example code for connecting to mongoDB on Atlas

// const getDatabaseCluster = async () => {
//     const pwd = process.env.DB_PWD
//     const username = process.env.DB_USERNAME
//     const uri = `mongodb+srv://${username}:${pwd}@train-data.jizrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
//     const client = new MongoClient(uri)

//     try {
//         //connect to database
//         await client.connect()

//         await listDatabases(client)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const listDatabases = async(client) => {
//     const databaseList = await client.db().admin().listDatabases()

//     console.log('Databases')
//     databaseList.databases.forEach(db => console.log(` -${db.name}`))
// }

// getDatabaseCluster()