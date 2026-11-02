import React, { useEffect } from 'react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <section className="termsConditions">
        <div className="row">
          <div className="col-12">
            <h1>
              <strong>Terms &amp; Conditions</strong>
            </h1>

            <p>
              Welcome to Doc Clarity APP. By accessing or using our mobile application, you agree to the following terms.
            </p>

            <h2>
              <strong>1. Our Services</strong>
            </h2>
            <p>
              Doc Clarity provides medical documentation analysis, compliance checks, and fraud risk identification using patient records retrieved from authorized third-party EHR systems.
            </p>

            <h2>
              <strong>2. EHR Integration</strong>
            </h2>
            <p>
              Users connect their authorized EHR system and enter Patient ID, Case Type, and Date of Service. The application retrieves available medical records through the connected API.
            </p>

            <h2>
              <strong>3. Account Security</strong>
            </h2>
            <p>
              Users are responsible for protecting their account credentials. Doc Clarity uses password protection, two-factor authentication (2FA), and role-based access controls.
            </p>

            <h2>
              <strong>4. Authorized Use</strong>
            </h2>
            <p>
              Users must have appropriate authorization to access patient information. Unauthorized access, misuse of medical data, or attempts to bypass security are prohibited.
            </p>

            <h2>
              <strong>5. Analysis Results</strong>
            </h2>
            <p>
              The application analyzes available medical records to identify documentation inconsistencies, compliance issues, and potential fraud indicators. Results are intended for professional review and do not constitute confirmed fraud or medical advice.
            </p>

            <h2>
              <strong>6. Third-Party Services</strong>
            </h2>
            <p>
              Access to medical records depends on the availability, permissions, and functionality of connected third-party EHR systems.
            </p>

            <h2>
              <strong>7. Privacy and Security</strong>
            </h2>
            <p>
              Doc Clarity implements security measures to protect sensitive information and restrict unauthorized access.
            </p>

            <h2>
              <strong>8. Changes to Terms</strong>
            </h2>
            <p>
              We may update these Terms &amp; Conditions when necessary. Updated versions will be available within the application.
            </p>

            <h2>
              <strong>9. Contact Us</strong>
            </h2>
            <p>For questions, please contact:</p>
            <p>
              <strong>Email:</strong> [Support Email]
            </p>
            <p>
              <strong>Company: </strong>Doc Clarity AI
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;

