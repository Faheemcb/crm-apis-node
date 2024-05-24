
import service from './Service.js' //importing service
import asyncerrorhandler from '../Utils/asyncHandler.js' //importing asynchronous error handler

const createsubscriber = asyncerrorhandler(async(req,res)=>{
    const subscriberdata = req.body 
    const create = await service.createsubscriber(subscriberdata)
    res.status(201).json(create)
  })


export default { createsubscriber}