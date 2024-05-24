import mongoose, { Schema } from "mongoose";

const userschema = new Schema(
    {
        subscriberType: {
            type: String,
            enum: ['INDIVIDUAL', 'COMPANY'],
            default: 'INDIVIDUAL',
            required: true
        },
        legalName: {
            type: String,
            trim: true,
            required: true
        },
        address: {
            type: String,
            trim: true
        },
        place: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true,
            unique: true
        },
        logoURL: {
            type: String,
            trim: true
        },
        website: {
            type: String,
            trim: true
        },
        taxNumber: {
            type: String,
            trim: true
        },
        nationalLabelIdValue: {
            type: String,
            trim: true
        },
        panNo: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        district: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        nationalIdLabel: {
            type: String,
            trim: true
        },
        countryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Country',
            required: true
        },
        stateId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'State',
            required: true
        },
        districtId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'District',
            required: true
        },
        cityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'City',
            required: true
        },
        nationalLabelId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'NationalLabel',
            required: true
        }
    }, { versionKey: false }
);

const collectionName = "Subscriber";
const subscriber = mongoose.model("Subscriber", userschema, collectionName);

export default subscriber;
