
import logger from '../Middleware/Logger.js'
import subscriber from '../models/Subscriber.js'
import BadRequestError from '../Exceptions/BadRequestError.js'



const createsubscriber = async (subscriberdata)=>{
    try {
        const newdata = await subscriber.create(subscriberdata)
        if (newdata) {
            logger.info("new subscriber added :",newdata)
            return newdata
        }else{
            logger.error("Error while adding subscriber");
            throw new BadRequestError("Error while adding new subscriber");
        }
    } catch (error) {
        throw error
    }
}

export default {createsubscriber}