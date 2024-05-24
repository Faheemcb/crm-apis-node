import mongoose , {Schema} from "mongoose";

const stateSchema = new Schema (
    {
        stateLabel: {
            type: String,
            required: true
        },
        countryId: {
            type: Schema.Types.ObjectId,
            ref: 'Country'
        }
    }
)

const collectionName = "State"
const State = mongoose.model("State", stateSchema , collectionName)

export default State; 