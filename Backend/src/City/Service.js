import BadRequestError from "../Exceptions/BadRequestError.js"
import Logger from "../Middleware/Logger.js"
import ValidationError from "../Exceptions/ValidationError.js"
import City from "../models/City.js"


const createCity = async(data) => {
    try {
        const city = await City.create(data)
        if (city) {
            Logger.info("City: ", city)
            return city
        }else {
            Logger.error("Error while creating city")
            throw new BadRequestError("Error while creating city")
        }

    } catch (error) {
        if (error.name === "ValidationError") {
            Logger.error(`validaion error : ${error.message}`);
            throw new ValidationError(error.message);
          } else {
            throw error;
          }
    }
}

export default {createCity}