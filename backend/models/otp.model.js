import mongoose from "mongoose";
const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600 
    }
});
const OTP = mongoose.model('OTP', OTPSchema);
const storeOTP = async (email, otp) => {
    try {
        const newOTP = new OTP({
            email,
            otp
        });
        await newOTP.save();
    } catch (error) {
        console.error('Error storing OTP:', error);
        throw error;
    }
};
const retrieveOTP = async (email) => {
    try {
        return await OTP.findOne({ email });
    } catch (error) {
        console.error('Error retrieving OTP:', error);
        throw error;
    }
};
export { OTP, storeOTP, retrieveOTP };