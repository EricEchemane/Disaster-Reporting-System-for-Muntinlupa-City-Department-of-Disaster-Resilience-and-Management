import mongoose from "mongoose";

const barangaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Barangay name is required"],
        minLength: [3, "Barangay name must be at least 3 characters long"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be at least 8 characters long"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    reportedIncidents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Caller",
    }]
});

barangaySchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

export type IBarangay = mongoose.InferSchemaType<typeof barangaySchema>;

const Barangay = mongoose.models.Barangay || mongoose.model('Barangay', barangaySchema);

export default Barangay;