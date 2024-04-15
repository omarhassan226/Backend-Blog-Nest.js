import { UploadedFile } from "@nestjs/common"
import { url } from "inspector"
import * as mongoose from "mongoose"
import { fileURLToPath } from "url"

export const postsSchema = new mongoose.Schema({


    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: String },
    image: {type: String}
})