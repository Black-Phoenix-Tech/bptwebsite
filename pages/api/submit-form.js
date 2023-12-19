import { firestore } from "../../firebase/firebase";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;

        try {
            // Store form data in Firebase Firestore
            await firestore.collection("formSubmissions").add({
                email,
                name,
                message,
                timestamp: new Date(),
            });

            // Send email to user (implement your email sending logic here)
            // ...

            res.status(200).json({ message: "Form submitted successfully!" });
        } catch (error) {
            console.error("Error submitting form:", error);
            res.status(500).json({ error: "An error occurred while submitting the form." });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
