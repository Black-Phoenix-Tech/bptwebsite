// submitForm.js
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebase";
// import emailjs from "emailjs-com";

const welcomeEmail = `
Hello,

Welcome to the Black Phoenix journey!

We're thrilled to have you on board, and we appreciate your commitment to your health and well-being. The Black Phoenix app is here to support you every step of the way on your health tracking adventure.

Our mission is to empower you with accurate, comprehensive health data, specifically tailored for neural patients. By using the app, you gain the ability to input and register your health information, providing a clear overview of your symptoms and overall health. This wealth of data not only aids you in understanding your health better but also facilitates more effective and personalized discussions with your healthcare providers.

One of the app's standout features is its assistance in adhering to prescribed treatment protocols. We understand the importance of consistency in your health journey, and our tool is designed to help you stay on track. With the ability to observe patterns, identify improvements, or setbacks, and share this valuable information with your healthcare providers or caregivers, you're taking control of your health like never before.

Additionally, the app allows you to export your data, graphs, and visualizations. This feature enables you to have a tangible record of your progress, which you can easily share with your healthcare team for even more informed discussions.

Thank you for choosing Black Phoenix. Your commitment to your health is inspiring, and we're here to support you on your journey to a healthier, happier life.

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
        // Store form data in Firestore
        const docRef = await addDoc(collection(db, "formData"), formData);
        console.log(docRef);
        // Send password reset email to user
        const { email, name } = formData;
        const message = `Hello ${name}, your form has been submitted successfully!`;
        console.log(message);
        // await sendPasswordResetEmail(auth, email, {
        //     url: "https://blackphoenix.ca", // Replace with your app URL
        //     handleCodeInApp: true,
        // });
        const emailData = {
            to: email,
            subject: "Welcome to Black Phoenix!",
            message: welcomeEmail,
        };

        Amirhossein;

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
        // sendEmail({ subject: "s", email: "a.m.h.optimist@gmail.com", message: "s" });
        // const response = await fetch("/api/sendEmail", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         subject: "Test email",
        //         message: "This is a test email from Next.js!",
        //     }),
        // });

        // const result = await response.json();

        // if (result.success) {
        //     console.log("Email sent successfully");
        // } else {
        //     console.error("Error sending email:", result.error);
        // }
        // sendEmail(formData)
        //     .then((result) => {
        //         // Handle success
        //         console.log("Email sent successfully:", result.data);
        //     })
        //     .catch((error) => {
        //         // Handle error
        //         console.error("Error sending email:", error);
        //     });
        console.log("Form data stored in Firestore:", docRef.id);
        console.log("Email sent to user:", email);
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

export default submitForm;
