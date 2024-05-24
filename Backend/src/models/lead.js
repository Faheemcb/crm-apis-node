import mongoose , {Schema} from "mongoose";

const leadSchema = new Schema(
    {
        subscriberId: {
            type: Schema.Types.ObjectId,
            ref: "Subscriber"
        },
        businessContactId: {
            type: Schema.Types.ObjectId,
            ref: "BusinessContact"
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        leadEvent: {
            type: Array
        }
    }
)

const collectionName = "Lead"
const Lead = mongoose.model("Lead", leadSchema , collectionName)

export default Lead;