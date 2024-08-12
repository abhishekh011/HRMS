import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { OTP, storeOTP } from "../models/otp.model.js";
const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
};
const sendOTPByEmail = async (email, otp) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mailto:udaymourya08@gmail.com',
            pass: 'oged wgyf ddul zidk'
        }
    });
    let mailOptions = {
        from: `mailto:${email}`,
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`
    };
    await transporter.sendMail(mailOptions);
};
export const sendOtp = async (request, response) => {
    try {
        const { email } = request.body;
        let user = await User.findOne({ email });
        if (!user) {
          return response.status(401).json({ message: 'Email Not Exist' });
        }
        const otp = generateOTP();
        await storeOTP(email, otp);
        await sendOTPByEmail(email, otp);
        return response.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};

export const resetPassword = async (request, response) => {
    try {
        const { email, otp, newPassword } = request.body;
        const storedOTP = await OTP.findOne({ email });

        if (!storedOTP || storedOTP.otp !== otp) {
            return response.status(401).json({ error: 'Invalid OTP' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await User.updateOne({ email }, { password: hashedPassword });
        return response.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.log(error)
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};