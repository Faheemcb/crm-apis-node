import cityService from "./Service.js"
import asyncHandler from "../Utils/asyncHandler.js"

const createNewCity = asyncHandler(async (req , res) => {
    const body = req.body
    const data = await cityService.createCity(body)
    res.status(201).json(data)

})

export default {createNewCity}