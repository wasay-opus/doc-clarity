import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <section className="termsConditions">
        <div className="row">
          <div className="col-12">
            <h1>Privacy Policy</h1>

            <p>
              At Doc Clarity, protecting your privacy and sensitive healthcare information is a priority.
            </p>

            <h2>
              <strong>1. Information We Collect</strong>
            </h2>
            <p>We may process:</p>
            <ul>
              <li>Account information, including name and email.</li>
              <li>Patient ID, Case Type, and Date of Service.</li>
              <li>Medical records retrieved through authorized EHR APIs.</li>
              <li>Login activity and device information for security purposes.</li>
            </ul>

            <h2>
              <strong>2. How We Use Information</strong>
            </h2>
            <p>
              We use this information to retrieve authorized patient records, perform documentation compliance checks, identify potential fraud risks, and generate analysis results.
            </p>

            <h2>
              <strong>3. Third-Party EHR Integration</strong>
            </h2>
            <p>
              Doc Clarity connects to authorized healthcare systems, such as Epic, to retrieve available medical information. Users do not manually upload documents through the mobile application.
            </p>

            <h2>
              <strong>4. Data Security</strong>
            </h2>
            <p>We implement security measures including:</p>
            <ul>
              <li>Two-factor authentication (2FA).</li>
              <li>Secure password hashing.</li>
              <li>Role-based access control.</li>
              <li>Protected API authentication.</li>
              <li>Server-side data validation.</li>
            </ul>

            <h2>
              <strong>5. Data Storage and Retention</strong>
            </h2>
            <p>
              Patient records and analysis results are handled according to the application’s applicable data storage and retention practices.
            </p>
            <p>
              Original medical records remain managed by their respective third-party healthcare systems.
            </p>

            <h2>
              <strong>6. Data Sharing</strong>
            </h2>
            <p>
              Medical information is accessed and processed through authorized integrations and necessary service providers. We do not sell patient information to advertisers.
            </p>

            <h2>
              <strong>7. User Privacy Rights</strong>
            </h2>
            <p>
              Users may request access to, correction of, or deletion of eligible personal information, subject to applicable laws. Requests involving original medical records may need to be directed to the relevant healthcare organization.
            </p>

            <h2>
              <strong>8. Policy Updates</strong>
            </h2>
            <p>
              We may update this Privacy Policy to reflect changes in application functionality or privacy practices.
            </p>

            <h2>
              <strong>9. Contact Us</strong>
            </h2>
            <p>For privacy-related questions, contact:</p>
            <p>
              <strong>Email:</strong> [Privacy Email]
            </p>
            <p>
              <strong>Company:</strong> Doc Clarity AI
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

