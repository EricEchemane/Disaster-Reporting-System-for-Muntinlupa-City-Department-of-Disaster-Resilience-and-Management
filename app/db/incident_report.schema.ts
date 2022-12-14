import { Schema, InferSchemaType } from 'mongoose';

const incidentSchema = new Schema({
    location: { type: String, required: true },
    description: { type: String, required: true },
    photos: { type: String, required: true },
    reporter: {
        type: {
            fullName: { type: String, required: true },
            contactNumber: { type: String, required: true },
            address: { type: String, required: true },
        },
        required: true,
    },
    date: { type: Date, default: Date.now },
    resolved: { type: Boolean, default: false },
});

export type Incident = InferSchemaType<typeof incidentSchema>;
export default incidentSchema;