import BadRequestError from "../Exceptions/BadRequestError.js"
import Logger from "../Middleware/Logger.js"
import ValidationError from "../Exceptions/ValidationError.js"
import District from "../models/District.js"


const createDistrict = async(data) => {
    try {
        const district = await District.create(data)
        if (district) {
            Logger.info("District: ", district)
            return district
        }else {
            Logger.error("Error while creating district")
            throw new BadRequestError("Error while creating district")
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

export default {createDistrict}