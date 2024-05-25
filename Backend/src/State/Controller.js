import stateService from "./Service.js"
import asyncHandler from "../Utils/asyncHandler.js"

const createNewState = asyncHandler(async (req , res) => {
    const body = req.body
    const data = await stateService.createState(body)
    res.status(201).json(data)

})

export default {createNewState}