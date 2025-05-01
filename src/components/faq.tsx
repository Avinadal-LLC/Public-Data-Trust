import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQ[];
}

interface FAQQuestionStructuredData {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

interface FAQStructuredData {
  '@context': string;
  '@type': string;
  mainEntity: FAQQuestionStructuredData[];
}

function slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }

/**
 * A component that renders a FAQ structured data and markdown entries
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export default function FAQStructuredData(props: FAQStructuredDataProps) {
  const faqStructuredData: FAQStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.faqs.map((faq): FAQQuestionStructuredData => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(faq.answer),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />          
      {props.faqs.map((faq) => {
        const id = slugify(faq.question)
        return (
        <React.Fragment key={faq.question}>
            <h2 className="anchor anchorWithStickyNavbar_LWe7" id={id}>
                {faq.question}
                <a href={"#"+id} className='hash-link' aria-label={"Direct link to "+faq.question} title={"Direct link to "+faq.question}>
                </a>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: faq.answer}} />
        </React.Fragment>
        )
      })}
    </>
  );
}

export function generateTOC(faqs: FAQ[]) {
    return faqs.map((faq) => ({
      id: slugify(faq.question),
      value: faq.question,
      level: 2
    }));
  }