import mongoose , {Schema} from "mongoose";

const unitSchema = new Schema(
    {
        unitName:  {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
)

const collectionName = "UnitOfMeasure"
const UnitOfMeasure = mongoose.model("UnitOfMeasure", unitSchema , collectionName)
export default UnitOfMeasure
