
import "./Contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "My professional email",
    href: "mailto:tahreemf2001@gmail.com",
    symbol: "✉", 
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/tfatima2001/",
    symbol: "↗",
  },
  {
    label: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/MAXIMUS-TURBO",
    symbol: "</>",
  },
];

function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-heading">
        <span className="eyebrow">CORRESPONDENCE</span>
        <h1>Let's connect.</h1>

        <p>
          Interested in collaborating, discussing an opportunity,
          or just saying hello? I'd love to hear from you.
        </p>
      </header>

      <div className="contact-grid">
        {contactLinks.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            className="contact-card"
            target={contact.label === "Email" ? undefined : "_blank"}
            rel={contact.label === "Email" ? undefined : "noopener noreferrer"}
          >
            <span className="contact-icon" aria-hidden="true">
              {contact.symbol}
            </span>

            <div>
              <span className="contact-label">{contact.label}</span>
              <h2>{contact.value}</h2>
            </div>

            <span className="contact-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>

      <div className="contact-note">
        <span>✦</span>
        <p>Thanks for visiting The Curiosity Cabinet.</p>
      </div>
    </div>
  );
}

export default Contact;
  