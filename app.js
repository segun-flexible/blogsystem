const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require('./error/errorHandler');
const errorResponse = require('./error/errorResponse');
const posts = require('./routes/posts/post');


const app = express();


/* app.use(helmet()) */
app.use(cors())





//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Cookie Parser
app.use(cookieParser());

//Serving Static Files
app.use(express.static(path.join(__dirname, 'public/build')));


/* Routes */
app.use('/api/v1',posts)



// catch 404 and forward to error handler
app.use(errorHandler);


app.listen(8000,()=>console.log("Server Started"))