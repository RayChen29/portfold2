import React, { useState } from 'react';

function ContactCard() {
  const [isSent, setIsSent] = useState(false);
  const [canSend, setCanSend] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleSendButtonClick = async () => {
    if (!isSent && canSend) {
      try {
        const response = await fetch('/.netlify-functions/sendEmail.js', {
          method: 'POST', // or 'GET' depending on your serverless function
          body: JSON.stringify({
            queryStringParameters: {
              name: contactName,
              email: contactEmail,
              message: contactMessage,
            },
          }),
        });
        const data = await response.json();

        // Check the response or perform additional actions if needed
        console.log(data);

        // Update state to indicate that the message has been sent
        setIsSent(true);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

  const handleInputChange = (event, setterFunction) => {
    const value = event.target.value;
    setterFunction(value);
    checkCanSend();
  };

  const checkCanSend = () => {
    setCanSend(
      contactName.trim() !== '' &&
      contactEmail.trim() !== '' &&
      contactMessage.trim() !== ''
    );
  };

  return (
    <div className="contact-card">
      <label className='name-label'>
        Name
        <input
          type="text"
          className="contact-name"
          value={contactName}
          onChange={(e) => handleInputChange(e, setContactName)}
        />
      </label>
      <label className='email-label'>
        Email
        <input
          type="text"
          className="contact-email"
          value={contactEmail}
          onChange={(e) => handleInputChange(e, setContactEmail)}
        />
      </label>
      <label className='message-label'>
        Message
        <textarea
          className="contact-message"
          rows={4}
          value={contactMessage}
          onChange={(e) => handleInputChange(e, setContactMessage)}
        />
      </label>
      <button
        type="submit"
        onClick={handleSendButtonClick}
        className="submit-button"
        disabled={!canSend || isSent}
      >
        {isSent ? 'Sent' : 'Send'}
      </button>
    </div>
  );
}

export default ContactCard;
