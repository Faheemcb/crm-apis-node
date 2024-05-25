
import logger from '../Middleware/Logger.js'
import BadRequestError from '../Exceptions/BadRequestError.js'
import user from '../models/User.js' 



const createuser = async (userdata)=>{
    try {
        const newdata = await user.create(userdata)
        if (newdata) {
            logger.info("new user added :",newdata)
            return newdata
        }else{
            logger.error("Error while adding user");
            throw new BadRequestError("Error while adding new user");
        }
    } catch (error) {
        throw error
    }
}

export default {createuser}