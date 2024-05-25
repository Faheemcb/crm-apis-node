import BadRequestError from "../Exceptions/BadRequestError.js"
import Logger from "../Middleware/Logger.js"
import Country from "../models/Country.js"
import ValidationError from "../Exceptions/ValidationError.js"


const createCountry = async(data) => {
    try {
        const country = await Country.create(data)
        if (country) {
            Logger.info("Country: ", country)
            return country
        }else {
            Logger.error("Error while creating country")
            throw new BadRequestError("Error while creating country")
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

export default {createCountry}