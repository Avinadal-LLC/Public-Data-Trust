import React from 'react';
import Layout from '@theme/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy" description="Public Data Trust Privacy Policy">
      <main style={{ maxWidth: 700, margin: '2em auto', padding: '1em' }}>
        <h1>Privacy Policy</h1>
        <p>
          <b>Last updated: July 3, 2025</b>
        </p>
        <h2>Information We Collect</h2>
        <p>
          This website does not collect personal information from visitors. We do not use analytics, advertising, or tracking cookies.
        </p>
        <h2>Contact Form Cookie</h2>
        <p>
          If you use the contact form, a cookie will be set in your browser to remember that you have submitted the form. This cookie contains no personal data and is used only to prevent repeated submissions. It expires automatically after one year.
        </p>
        <h2>Third-Party Services</h2>
        <p>
          This site does not use third-party analytics, advertising, or social media plugins.
        </p>
        <h2>Data Sharing</h2>
        <p>
          We do not share, sell, or transfer any user data to third parties.
        </p>
        <h2>Your Rights</h2>
        <p>
          You may clear your browser cookies at any time to remove the contact form cookie. No other data is stored or processed.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about this privacy policy, please use the contact form on this site.
        </p>
      </main>
    </Layout>
  );
}
