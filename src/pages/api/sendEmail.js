import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end(); // Method Not Allowed
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL, // Điền email của bạn
            pass: process.env.NEXT_PUBLIC_KEY_APP, // Điền mật khẩu email của bạn
        },
    });

    const mailOptions = {
        from: process.env.NEXT_PUBLIC_FROM_EMAIL,
        to: process.env.NEXT_PUBLIC_TO_EMAIL, // Điền email của bạn
        subject: "New Message from Contact Portfolio",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).send("Internal Server Error");
    }
}
