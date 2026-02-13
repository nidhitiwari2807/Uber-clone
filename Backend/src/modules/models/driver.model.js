import mongoose from "mongoose";
import { uppercase } from "zod";
import { de } from "zod/v4/locales";



const driverSchema = new mongoose.Schema({
    userId: {
        type: mongoose.schema.types.objectId,
        ref: 'User',
        required: true,
        unique: true
     },

     personalInfo: {
        languagePreference: {
            type: String,
            enum: ['ENGLISH', 'SPANISH', 'FRENCH', 'OTHER'],
            required: [true, 'Language preference is required']

        },
        city: {
            type: String,
            enum: ['NEW YORK', 'LOS ANGELES', 'CHICAGO', 'HOUSTON', 'PHOENIX', 'BHOPAL'],
            required: [true, 'City is required']
        },
        profilePicture: {
            type: String,
            default: null
         },

        aadharNumber: {
            type: String,
            required: [true, 'Aadhar number is required'],
            unique: true,

        },
        documents: {
           licenseNumber: {
            type: String,
            default: null
           },
         
           rcNumber: {
            type: String,
            required: [true, 'RC number is required'],
            uppercase: true,
            trim: true

           },
           rcExpire: {
            type: Date,
            default: null
           },

           vehicaleType: {
            types: String,
            enum: ['CAR', 'BIKE', 'AUTO', 'VAN']
 },
    vehicalModel: {
        type: String,
        trim: true,
        default: null
    },
    vehicalColor: {
        type: String,
        trim: true,
        default: null
     },
    },

    status: {
        isOnline: {
            type: Boolean,
            default: false
        },

        isVerified: {
            type: Boolean,
            default: false
         },
          profileCompletionPercentage: {
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        }
    }
}



})

