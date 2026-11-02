import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="sectionFive" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <div className="contact-card">
              <h3>
                Your Questions Matter,<br />
                <strong>We’re Here to Listen</strong>
              </h3>
              <p>
                Have any doubts, feedback, or need more details? Share your questions with us and let our team provide clear, fast, and reliable answers
              </p>

              {submitted && (
                <div className="form-alert-success">
                  <i className="fa-solid fa-circle-check me-2"></i>
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}

              {error && (
                <div className="alert alert-danger" style={{ borderRadius: '15px' }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control-pill"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control-pill"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control-pill"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="contact-submit-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="side-mockup">
              <img
                src="/assets/Group-1686556130.png"
                alt="Doc Clarity Mobile Mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

