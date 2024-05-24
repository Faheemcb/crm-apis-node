import mongoose , {Schema} from "mongoose";

const citySchema = new Schema (
    {
        cityLabel: {
            type: String,
            required: true
        },
        stateId: {
            type: Schema.Types.ObjectId,
            ref: 'State'
        },
        countryId: {
            type: Schema.Types.ObjectId,
            ref: 'Country'
        }
    }
)

const collectionName = "City"
const City = mongoose.model("City", citySchema , collectionName)

export default City; 