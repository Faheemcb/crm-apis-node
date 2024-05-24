import mongoose from 'mongoose'
import logger from '../Middleware/Logger.js'
import countryjson from '../../data/Country.json' assert{type:'json'}
import statejson from '../../data/State.json' assert{type:'json'}
import districtjson from '../../data/District.json' assert{type:'json'}
import cityjson from '../../data/City.json' assert{type:'json'}
import nationallabeljson from '../../data/NationalLabel.json' assert{type:'json'}
import Country from '../models/Country.js'
import State from '../models/State.js'
import District from '../models/District.js'
import City from '../models/City.js'
import NationalIdLabel from '../models/NationalLabel.js'

const connecttoDB = ()=>{
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    mongoose.connection.on("connected",async()=>{
        logger.info("MongoDB Connected Successfully");
        await insertcountry()
        await insertstate()
        await insertdistrict()
        await insertcity()
        await insertnationallabel()
    })
        mongoose.connection.on("error", (err) => {
        logger.error("Error while connecting to database: " + err);
    });

    mongoose.connection.on("disconnected", () => {
        logger.warn("MongoDB connection disconnected");
    });
}

export default connecttoDB


const insertcountry = async()=>{
    try {
        const existingdata = await Country.find()
        if (existingdata.length === 0) {
            await Country.insertMany(countryjson)
            logger.info("Country added successfully")
        }
    } catch (error) {
        logger.error("error inserting data")
    }
}

const insertstate = async()=>{
    try {
        const existingdata = await State.find()
        if (existingdata.length === 0) {
            await State.insertMany(statejson)
            logger.info("State added successfully")
        }
    } catch (error) {
        logger.error("error inserting data")
    }
}

const insertdistrict = async()=>{
    try {
        const existingdata = await District.find()
        if (existingdata.length === 0) {
            await District.insertMany(districtjson)
            logger.info("District added successfully")
        }
    } catch (error) {
        logger.error("error inserting data")
    }
}

const insertcity = async()=>{
    try {
        const existingdata = await City.find()
        if (existingdata.length === 0) {
            await City.insertMany(cityjson)
            logger.info("City added successfully")
        }
    } catch (error) {
        logger.error("error inserting data")
    }
}

const insertnationallabel = async()=>{
    try {
        const existingdata = await NationalIdLabel.find()
        if (existingdata.length === 0) {
            await NationalIdLabel.insertMany(nationallabeljson)
            logger.info("NationalIdLabel added successfully")
        }
    } catch (error) {
        logger.error("error inserting data")
    }
}