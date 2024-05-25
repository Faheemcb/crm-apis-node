
import service from './Service.js' //importing service
import asyncerrorhandler from '../Utils/asyncHandler.js' //importing asynchronous error handler

const createuser = asyncerrorhandler(async(req,res)=>{
    const userdata = req.body 
    const create = await service.createuser(userdata)
    res.status(201).json(create)
  })


export default { createuser}