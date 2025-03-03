import { useState } from "react";
import axios from "axios";


export default function ContactForm({onMeetingCreated}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setNumber] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setMessage("");
  
      try {
        const response = await axios.post("http://localhost:3000/contactRequests", {
          name,
          email,
          phonenumber,
          reason
        });
        setMessage("Thank you "+ response.data.name +" for filling out your contact info we will soon be in contact about the meeting time. Make sure to keep an eye on your email at: "+ response.data.email +"");
        setName("");
        setEmail("");
        setNumber("");
        setReason("");
        onMeetingCreated();
      } catch (error) {
        setMessage("Error: " + (error.response?.data?.error || error.message));
      }
    };

    return (
        <div>
            <section id="book">
                <h2>Book a Meeting</h2>
                <p>
                    If you have business with our company, fill out the form with your contact information and we will get in contact with you to schedule a meeting as soon as possible. Thank you!
                </p>
                <form id="meeting" onSubmit={handleSubmit} className="form-group">
                    <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"/>
                    <input type="email" id="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"/>
                    <input type="number" id="phoneNumber" placeholder="Phonenumber (Optional)" value={phonenumber} onChange={(e) => setNumber(e.target.value)} className="form-control"/>
                    <textarea id="reason" placeholder="What does the meeting concern?" rows="5" value={reason} onChange={(e) => setReason(e.target.value)} className="form-control"></textarea>
                    <input type="submit" value="Send!" className="btn btn-primary"/>
                </form>
                <p id="formText">{message}</p>
            </section>
        </div>
    );
};

