// submitForm.js
import { addDoc, collection } from "firebase/firestore";
import { auth, db, sendPasswordResetEmail } from "./firebase";

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

        await sendPasswordResetEmail(auth, email, {
            url: "https://blackphoenix.ca", // Replace with your app URL
            handleCodeInApp: true,
        });

        console.log("Form data stored in Firestore:", docRef.id);
        console.log("Email sent to user:", email);
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

export default submitForm;
