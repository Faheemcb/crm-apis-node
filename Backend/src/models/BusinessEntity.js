import mongoose , {Schema} from "mongoose";

const entitySchema = new Schema(
    {
        companyName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: true
        },
        companyRegNo: {
            typoe: String,
            required: true
        }
    }
)

const collectionName = "BusinessEntity"
const BusinessEntity = mongoose.model("BusinessEntity", entitySchema , collectionName)

export default BusinessEntity; 