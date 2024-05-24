import mongoose , {Schema} from "mongoose";

const nationalIdLabelSchema = new Schema (
    {
        nationalLabel : {
            type: String,
            required: true
        }
    }, { versionKey: false }
)

const collectionName = "NationalIdLabel"
const NationalIdLabel = mongoose.model("NationalIdLabel", nationalIdLabelSchema , collectionName)

export default NationalIdLabel; 