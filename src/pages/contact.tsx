import React from 'react';
import Layout from '@theme/Layout';
import FakeContactForm from '@site/src/components/FakeContactForm';

export default function ContactPage() {
  return (
    <Layout title="Contact Us" description="Contact the PDT Foundation">
      <main style={{ maxWidth: 600, margin: '2em auto', padding: '1em' }}>
        <h1>Contact Us</h1>
        <p>
          Have a question, suggestion, or concern? Use the form below to send a message to the PDT Foundation team.
        </p>
        <FakeContactForm />
      </main>
    </Layout>
  );
}
