import { Schema, model } from "mongoose";

const infoSchema = new Schema({
    info: {
        type: String,
        required: true
    }
})

const Info = model('Info', infoSchema);
export default Info;