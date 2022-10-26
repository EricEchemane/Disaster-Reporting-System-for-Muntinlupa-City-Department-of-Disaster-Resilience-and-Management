import { Schema, InferSchemaType } from 'mongoose';

const incidentReportSchema = new Schema({
    brgyLocation: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: String, required: true },
    reporter: {
        type: {
            fullName: { type: String, required: true },
            contactNumber: { type: String, required: true },
            address: { type: String, required: true },
        },
        required: true,
    },
});

export type IIncidentReport = InferSchemaType<typeof incidentReportSchema>;
export default incidentReportSchema;