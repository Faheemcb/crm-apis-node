import mongoose , {Schema} from "mongoose";

const productSchema = new Schema(
    {
        name:  {
            type: String

        },
        description: {
            type: String
        },
        sellingPrice: {
            type: String
        },
        address: {
            type: String
        },
        subscriberId: {
            type: String
        }
    }
)

const collectionName = "Product"
const Product = mongoose.model("Product", productSchema , collectionName)

export default Product;