const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3000);

//Middleswares
app.use(morgan('dev'));
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/bot',require('./routes/main.routes'));

app.listen(3000, ()=> {
    console.log("Server On Port ", app.get('port'))
});