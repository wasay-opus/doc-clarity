import React, { useEffect } from 'react';

const DeleteAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <section className="termsConditions">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <section className="deleteHead">
              <h1>
                <strong>Delete Your Account</strong>
              </h1>
              <p>
                We understand that sometimes you may want to delete your account. Before proceeding, please note that account deletion is <strong>permanent</strong> and cannot be undone. Follow the steps below to request account deletion.
              </p>

              <h3>How to Delete Your Account</h3>

              <h4>1. Open the App</h4>
              <p>Launch the application on your device and ensure you’re logged in to your account.</p>

              <h4>2. Go to Profile Settings</h4>
              <p>Tap on the <strong>Profile</strong> tab located in the navigation menu.</p>

              <h4>3. Select “Delete Account”</h4>
              <p>Scroll down to find the <strong>Account Deletion</strong> option and tap on it.</p>

              <h4>4. Confirm Your Request</h4>
              <p>
                To delete your account, select <strong>“Delete Account”</strong>, enter your password, and click <strong>“Delete”</strong> to confirm and complete the account deletion.
              </p>

              <h4>5. Account Deletion Request Submitted</h4>
              <p>
                Once confirmed, your request for account deletion will be processed.<br />
                You will receive a confirmation email regarding the successful deletion of your account.<br />
                If you need any assistance, feel free to contact us for further help.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;
