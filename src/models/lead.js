import mongoose , {Schema} from "mongoose";

const leadSchema = new Schema(
    {
        subscriberId: {
            type: String
        },
        businessContactId: {
            type: String
        },
        userId: {
            type: String
        },
        leadEvent: {
            type: Array
        }
    }
)

const collectionName = "Lead"
const Lead = mongoose.model("Lead", leadSchema , collectionName)

export default Lead;