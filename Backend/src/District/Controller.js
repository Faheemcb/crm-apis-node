import districtService from "./Service.js"
import asyncHandler from "../Utils/asyncHandler.js"

const createNewDistrict = asyncHandler(async (req , res) => {
    const body = req.body
    const data = await districtService.createDistrict(body)
    res.status(201).json(data)

})

export default {createNewDistrict}