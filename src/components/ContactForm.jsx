import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo - in production, this would send an email)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-form__container" id="contact-form">
      <h2 className="contact-form__title">Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="contact_button_container">
            <button type="submit" className="form__submit">Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm