import express, { json } from 'express';
import exphbs from 'express-handlebars';
import fetch from 'node-fetch';
import {key} from './sources/keys.js';



const app = express();

//Body Parser Middleware

app.use(express.json()); 



app.engine('handlebars',exphbs.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req, res)=>{
    res.render('index');
});

app.post('/weather/:city_name',async (req,res) => {
    const cityName = req.params.city_name;
    try{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key.API_KEY}`;
    const fetchResponse = await fetch(apiUrl);
    const json = await fetchResponse.json();

    res.send(`The temp in ${json.name} city is ${json.main.temp} F.`);
    // res.json(json)

} catch{

    res.send(`${cityName} city is not found.`);
    
} 
 });

export default app