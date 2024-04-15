import * as mongoose from "mongoose"

export const registerSchema = new mongoose.Schema({


    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true },


})