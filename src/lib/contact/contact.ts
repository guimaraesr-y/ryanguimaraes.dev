import { Schema, model, models } from "mongoose";

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    ipAddress: {
        type: String
    },
}, {
    timestamps: {
        createdAt: 'createdAt',
    },
});

// check if model exists, if so return it, if not, create it
const Contact = models.Contact || model('Contact', contactSchema);
export default Contact;