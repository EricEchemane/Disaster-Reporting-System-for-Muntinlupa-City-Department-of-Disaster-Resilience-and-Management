import mongoose from "mongoose";

export type incidents = "Earthquake" | "Flood" | "Fires" | "Vehicle accident" | "Clearing operation" | "Traffic" | "Obstruction in barangay" | string;

export const callerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full naem is required"],
        minLength: [5, "Full name must be at least 3 characters long"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        validate: {
            validator: (phone: string) => {
                if (phone.startsWith('+63') === false) return false;
                if (phone.length !== 13) return false;
                return true;
            },
            message: "Invalid phone number",
        }
    },
    faceImageUrl: {
        type: String,
        required: [true, "Face image url is required"],
        validate: {
            validator: (url: string) => url.startsWith('https://'),
            message: "Invalid image url",
        }
    },
    incident: {
        type: String,
        required: [true, "Please describe the incident"],
    },
    reportedFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Barangay",
        required: [true, "Please specify the barangay where the incident is reported from"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

callerSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

export type ICaller = mongoose.InferSchemaType<typeof callerSchema>;

const Caller = mongoose.models.Caller || mongoose.model('Caller', callerSchema);

export default Caller;