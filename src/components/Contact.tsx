import React from 'react';

interface ContactProps {
  contacts: {
    type: string;
    value: string;
    link?: string;
  }[];
}

const Contact: React.FC<ContactProps> = ({ contacts }) => {
  return (
    <section className="contact">
      <h3 className="section-title">Контакты</h3>
      <div className="contact-grid">
        {contacts.map((contact, idx) => (
          <div key={idx} className="contact-item">
            <span className="contact-type">{contact.type}:</span>
            {contact.link ? (
              <a href={contact.link} className="contact-link" target="_blank" rel="noopener noreferrer">
                {contact.value}
              </a>
            ) : (
              <span className="contact-value">{contact.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;