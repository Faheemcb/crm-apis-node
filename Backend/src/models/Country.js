import mongoose , {Schema} from "mongoose";

const countrySchema = new Schema (
    {
        countryLabel: {
            type: String,
            required: true
        }
    }
)

const collectionName = "Country"
const Country = mongoose.model("Country", countrySchema , collectionName)

export default Country; 