import mongoose , {Schema} from "mongoose";

const leadEventSchema = new Schema(
    {
        eventType: {
            type: String,
            enum:["Create","Update"],
            default: "Create"
        },
        status: {
            type: String,
            enum:["Open","Won","Lost"],
            default: "Open"
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        leadId: {
            type: Schema.Types.ObjectId,
            ref: "Lead"
        },
        leadItems: [String],
        totalAmount: {
            type: String,
            required: true
        },
        dateTime: {
            type: Date,
            default: Date.now()
        }
    }
)

const collectionName = "LeadEvent"
const LeadEvent = mongoose.model("LeadEvent", leadEventSchema , collectionName)

export default LeadEvent;