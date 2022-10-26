import { Schema, InferSchemaType } from 'mongoose';

const incident = new Schema({
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
});

export type Incident = InferSchemaType<typeof incident>;
export default incident;