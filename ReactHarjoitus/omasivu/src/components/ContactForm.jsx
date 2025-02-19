const ContactForm = () => {
    return(
        <div>
            <section id="book">
                <h2>Book a Meeting</h2>
                <p>If you have business with our company fill out the form with your contact information and we will get in contact with you to schedule a meeting as soon as possible. Thank you!</p>
                <form id="meeting">
                    <input type="text" id="name" placeholder="Name"/>
                    <input type="email" id="email" required placeholder="Email"/>
                    <input type="number" id="number" placeholder="Phonenumber(Optional)"/>
                    <textarea id="reason" placeholder="What does the meeting concern?" rows="5"></textarea>
                    <input type="submit" value="Send!" class="button"/>
                </form>
                <p id="formText"></p>
            </section>
        </div>
    )
}
export default ContactForm;