import countryService from "./Service.js"
import asyncHandler from "../Utils/asyncHandler.js"

const createNewCountry = asyncHandler(async (req , res) => {
    const body = req.body
    const data = await countryService.createCountry(body)
    res.status(201).json(data)

})

export default {createNewCountry}