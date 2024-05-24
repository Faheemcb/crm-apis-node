import mongoose , {Schema} from "mongoose";

const districtSchema = new Schema (
    {
        districtLabel: {
            type: String,
            required: true
        },
        stateId: {
            type: Schema.Types.ObjectId,
            ref: 'State'
        }
    }
)

const collectionName = "District"
const District = mongoose.model("District", districtSchema , collectionName)

export default District; 