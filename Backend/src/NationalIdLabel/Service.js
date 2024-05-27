import BadRequestError from "../Exceptions/BadRequestError.js"
import Logger from "../Middleware/Logger.js"
import ValidationError from "../Exceptions/ValidationError.js"
import NationalIdLabel from "../models/NationalLabel.js"


const createNationalIdLabel = async(data) => {
    try {
       const nationalIdLabel = await NationalIdLabel.create(data)
       if (nationalIdLabel) {
        Logger.info("NationalIdLabel: ", nationalIdLabel);
        return nationalIdLabel;
       }else {
        Logger.error("Error while crreating National Id label")
        throw new BadRequestError("Error while creating National Id Lbael")
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

export default {createNationalIdLabel}