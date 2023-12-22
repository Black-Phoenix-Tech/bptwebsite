// submitForm.js
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebase";

const welcomeEmail = `
Hello,

Welcome to the Black Phoenix journey!🌟

It's all about you!

Our mission is to empower you with accurate, comprehensive health data, specifically tailored for neural patients. By using the Falcon app, you gain the ability to input and register your health information, providing a clear overview of your symptoms and overall health. This wealth of data not only aids you in understanding your health better but also facilitates more effective and personalized discussions with your healthcare providers.

One of the Falcon app's standout features is its assistance in adhering to prescribed treatment protocols. We understand the importance of consistency in your health journey, and our tool is designed to help you stay on track. With the ability to observe patterns, identify improvements, or setbacks, and share this valuable information with your healthcare providers or caregivers, you're taking control of your health like never before.

Additionally, the Falcon app allows you to export your data, graphs, and visualizations. This feature enables you to have a tangible record of your progress, which you can easily share with your healthcare team for even more informed discussions.

Thank you for choosing Black Phoenix. Your commitment to your health is inspiring, and we're here to support you on your journey to a healthier, happier life.

Falcon app is coming soon...

Love,

The Black Phoenix Team
`;

const submitForm = async (formData) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            console.error("User is not authenticated");
            return;
        }
        const docRef = await addDoc(collection(db, "formData"), formData);

        const { email, name } = formData;
        const message = `Hello ${name}, your form has been submitted successfully!`;

        const emailData = {
            to: email,
            subject: "Welcome to Black Phoenix!",
            message: welcomeEmail,
        };

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailData),
            });

            const result = await response.json();

            if (result.success) {
                console.log("Email sent successfully");
            } else {
                console.error("Error sending email:", result.error);
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

export default submitForm;
