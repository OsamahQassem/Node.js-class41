import express from 'express';
import exphbs from 'express-handlebars';


// const fetch = require('node-fetch');
const Hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;


const app = express();

//Body Parser Middleware

app.use(express.json());

app.engine('handlebars',exphbs.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req, res)=>{
    res.render('index');
});

app.post('/weather', (req,res) => {

    const cityName = req.body.cityName;

    res.send(cityName);
 });

app.listen(port,Hostname,()=> {console.log(`our server works in ${Hostname}:${port}`)});


