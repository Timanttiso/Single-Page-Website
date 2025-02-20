import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        reason: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(
            `Thank you ${formData.name} for filling out your contact info. We will soon be in contact about the meeting time. Make sure to keep an eye on your email at: ${formData.email}`
        );
        setFormData({ name: "", email: "", phoneNumber: "", reason: "" });
    };

    return (
        <div>
            <section id="book">
                <h2>Book a Meeting</h2>
                <p>
                    If you have business with our company, fill out the form with your contact information and we will get in contact with you to schedule a meeting as soon as possible. Thank you!
                </p>
                <form id="meeting" onSubmit={handleSubmit}>
                    <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <input type="email" id="email" required placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="number" id="phoneNumber" placeholder="Phonenumber (Optional)" value={formData.phoneNumber} onChange={handleChange} />
                    <textarea id="reason" placeholder="What does the meeting concern?" rows="5" value={formData.reason} onChange={handleChange}></textarea>
                    <input type="submit" value="Send!" className="button" />
                </form>
                <p id="formText">{message}</p>
            </section>
        </div>
    );
};

export default ContactForm;