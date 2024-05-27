import service from "./Service.js"
import asyncHandler from "../Utils/asyncHandler.js"

const createNewNationalId = asyncHandler(async (req , res) => {
    const body = req.body
    const data = await service.createNationalIdLabel(body)
    res.status(201).json(data)

})

export default {createNewNationalId}