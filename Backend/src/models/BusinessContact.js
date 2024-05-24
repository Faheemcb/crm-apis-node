import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
    {
        contactName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        businessEntity: {
            businessEntityId: Schema.Types.ObjectId,
            companyName: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            website: {
                type: String,
                required: true
            },
            companyRegNo: {
                typoe: String,
                required: true
            }
        },
        district: {
            districtId: Schema.Types.ObjectId,
            districtLabel: {
                type: String,
                required: true
            },
            stateId: {
                type: Schema.Types.ObjectId,
                ref: 'State'
            }
        },
        country: {
            countryId: Schema.Types.ObjectId,
            countryLabel: {
                type: String,
                required: true
            }
        },
        state: {
            stateId: Schema.Types.ObjectId,
            stateLabel: {
                type: String,
                required: true
            },
            countryId: {
                type: Schema.Types.ObjectId,
                ref: 'Country'
            }
        },
        city: {
            cityId: Schema.Types.ObjectId,
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
    }
)

const collectionName = "BusinessContact"
const BusinessContact = mongoose.model("BusinessContact", contactSchema, collectionName)

export default BusinessContact;