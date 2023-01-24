import app from './app.js'

const Hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;


app.listen(port,Hostname,()=> {console.log(`our server works in ${Hostname}:${port}`)});


