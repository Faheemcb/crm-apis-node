import express from "express"; // importing express
import cors from 'cors' //importing cors
import dotenv from "dotenv";   // importing .env file
import swaggerjsdoc from 'swagger-jsdoc' // importing swagger-jsdoc
import swaggerui from 'swagger-ui-express' // imorting swagger-ui-express
import connecttodatabase from './Config/Db.js' // importing connection to database
import path , { dirname }  from 'path'; // importing path , dirname API'S from path module
import NotFoundError from './Exceptions/NotFoundError.js' // importing Custom Error Handler
import { fileURLToPath } from 'url'; // importing url module
import {errorhandler} from "./Middleware/errorHandler.js"; // importing global error handler
import leadRouter from "./Lead/Router.js"

const __dirname = dirname(fileURLToPath(import.meta.url)); // Configuring dirname path


// configuring .env file
dotenv.config({     
    path:"./.env"
})


const app = express(); 

app.use(cors())
connecttodatabase() //connect to database

app.use(express.json()) //defining middleware

// Setup swagger
const swaggerDefinition = {
        openapi: "3.0.0",
        info:{
            title:"LMS",
            version:"1.0.0",
            description:"API FOR LEAD MANAGEMENT SYSTEM"
        },
    servers: [
        {
            url: "http://localhost:7000"
        },
    ],
    
}

// Swagger routes
const options = {
    swaggerDefinition,
    apis: [
        path.join(__dirname,"Lead","Router.js")
    ],
};


const swaggerspecs = swaggerjsdoc(options);
app.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerspecs,{
    swaggerOptions: {
        docExpansion: "none",
    },
    customSiteTitle: "LMS API"
}));

// Defining routes
app.use('/api/v1',jobapplicationrouter) //configuring routes for job application module






// Handling unmatched URLs.
app.all('*',(req,res,next)=>{
    const error = new NotFoundError("Invalid Url")
    next(error)
})

app.use(errorhandler); // middleware for global error handler

app.listen(process.env.PORT || 5000 , () => console.log("Server up and running 🚀"));