import ContactCard from "./contact-card";
import "./contact.css";

function Contact() {


    return (
        <div className="contact-section">
            <p className="contact-blurb">
                Got questions? Feedback? Need help? Let me know below or at rcn9666@gmail.com
            </p>
            <ContactCard/>
            {/* Contact Fields + Button Here */}

        </div>

    )
}

export default Contact