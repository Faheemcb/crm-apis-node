import BadRequestError from "../Exceptions/BadRequestError.js"
import Logger from "../Middleware/Logger.js"
import ValidationError from "../Exceptions/ValidationError.js"
import State from "../models/State.js"


const createState = async(data) => {
    try {
        const state = await State.create(data)
        if (state) {
            Logger.info("State: ", state)
            return state
        }else {
            Logger.error("Error while creating state")
            throw new BadRequestError("Error while creating state")
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

export default {createState}