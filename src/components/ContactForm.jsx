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
    <section className="contact-form" id="contact">
      <h2 className="contact-form__heading">Get In Touch</h2>
      <form className="contact-form__wrapper" onSubmit={handleSubmit}>
        <div className="contact-form__field">
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
        <div className="contact-form__field">
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
        <div className="contact-form__field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="contact-form__btn-wrapper">
            <button type="submit" className="contact-form__submit-btn">Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm