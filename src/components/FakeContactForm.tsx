import React, { useState, useEffect } from 'react';

const COOKIE_NAME = 'contactFormSubmitted';

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name: string) {
  return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

const recipients = [
  { value: 'genres', label: 'General Research' },
  { value: 'astro', label: 'Astronomy & Astrophysics' },
  { value: 'culhis', label: 'Culture & History' },
  { value: 'engtech', label: 'Engineering & Technology' },             
  { value: 'medbio', label: 'Medicine & Biotechnology' },
  { value: 'poleco', label: 'Politics & Economics' },
];

export default function FakeContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipient, setRecipient] = useState(recipients[0].value);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (getCookie(COOKIE_NAME)) setSubmitted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setCookie(COOKIE_NAME, 'yes');
    }, 1200);
  };

  if (submitted) {
    // 10% chance to show an alternate message
    const showAlt = Math.random() < 0.1;
    if (showAlt) {
      return (
        <div style={{ textAlign: 'center', margin: '2em 0' }}>
          <b>D̵̻̫̈́̔O̵̥͋ ̷̞̬́̕̚N̴̯̲̥͘Ȏ̴̠̜͙̓T̷̻̘͗̈̄ ̶̦̄̚͝Ṱ̶̝̆͑͝Ṛ̴̹̥̍̅̚Ư̴͕̪̙͌Ṣ̵̨̏̆̌Ṭ̷̼̾͜ ̵͔̝̯̈́Ț̴̞̖̒̒H̶̯̓̋̕Ẽ̵͖͈̎́M̶͚̮̉</b>
        </div>
      );
    }
    return (
      <div style={{ textAlign: 'center', margin: '2em 0' }}>
        <b>Thank you! Your message has been received.</b>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2em auto', textAlign: 'left' }} className='fake-contact-form'>
      <label>
        Receiving Department:        
        <select value={recipient} onChange={e => setRecipient(e.target.value)} style={{ width: '100%', margin: '0.5em 0' }}>
          {recipients.map(r => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={4}
          style={{ width: '100%', margin: '0.5em 0' }}
        />
      </label>
      <button type="submit" style={{ width: '100%', padding: '0.5em', fontWeight: 'bold' }} disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {loading && (
        <div style={{ textAlign: 'center', marginTop: '1em' }}>
          <span className="loader" style={{
            display: 'inline-block',
            width: 24,
            height: 24,
            border: '3px solid #ccc',
            borderTop: '3px solid #1576BA',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <style>
            {`@keyframes spin { 100% { transform: rotate(360deg); } }`}
          </style>
        </div>
      )}
    </form>
  );
}