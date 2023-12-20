import sgMail from "@sendgrid/mail";

export default async (req, res) => {
    const { to, subject, message } = req.body;

    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to,
            from: { name: "Amirhossein Khoshbin", email: "cto@blackphoenix.ca" }, // Replace with your verified sender email in SendGrid
            subject,
            text: message,
        };

        await sgMail.send(msg);
        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
