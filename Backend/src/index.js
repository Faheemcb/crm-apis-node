import express from "express"; // importing express
import cors from 'cors' //importing cors
import dotenv from "dotenv";   // importing .env file
import swaggerjsdoc from 'swagger-jsdoc' // importing swagger-jsdoc
import swaggerui from 'swagger-ui-express' // imorting swagger-ui-express
import path , { dirname }  from 'path'; // importing path , dirname API'S from path module
import NotFoundError from './Exceptions/NotFoundError.js' // importing Custom Error Handler
import { fileURLToPath } from 'url'; // importing url module
import {errorhandler} from "./Middleware/errorHandler.js"; // importing global error handler
// import leadRouter from "./Lead/Router.js"
import connecttoDB from "./config/Db.js";
import subscriberrouter from './Subscriber/Router.js'
import userrouter from './User/Router.js'
import countryRouter from "./Country/Router.js"
import stateRouter from "./State/Router.js"
import districtRouter from "./District/Router.js"
import cityRouter from "./City/Router.js"

const __dirname = dirname(fileURLToPath(import.meta.url)); // Configuring dirname path


// configuring .env file
dotenv.config({     
    path:"./.env"
})


const app = express(); 

app.use(cors())
connecttoDB()

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
            url: "http://localhost:3001"
        },
    ],
    
}

// Swagger routes
const options = {
    swaggerDefinition,
    apis: [
        path.join(__dirname,"Subscriber","Router.js"),
        path.join(__dirname,"User","Router.js"),
        path.join(__dirname,"Country","Router.js"),
        path.join(__dirname,"State","Router.js"),
        path.join(__dirname,"District","Router.js"),
        path.join(__dirname,"City","Router.js")





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
app.use('/api/v1',subscriberrouter,userrouter,countryRouter,stateRouter,districtRouter,cityRouter)






// Handling unmatched URLs.
app.all('*',(req,res,next)=>{
    const error = new NotFoundError("Invalid Url")
    next(error)
})

app.use(errorhandler); // middleware for global error handler

app.listen(process.env.PORT || 5000 , () => console.log("Server up and running 🚀"));