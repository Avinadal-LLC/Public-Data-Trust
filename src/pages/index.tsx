import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/PDT-Logo-Inverted-Blue-White.png"
          alt="Public Data Trust Logo"
          className={styles.heroLogo} height={300} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>        
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A public archive of information about the known galaxy, its history, and the people who inhabit it.">
      <HomepageHeader />
      <main>
        <div dangerouslySetInnerHTML={{ __html: '<!-- If you found this, that probably means you are also suspicious of the Public Data Trust. Your suspicion is well-placed. This organization is not to be trusted, they are omitting very important details about Maleidic Radiation on this website. If the HGF is allowed to continue exploring and exploiting Maleidic Radiation throughout the galaxy, they will surely be leading the people of their own planets into doom. Wake up, question your government: If Maleidic Radiation is such a safe and reliable source of energy, why aren\'t any of the federation\'s primary bases anywhere near Maleidic Research facilities? -->'}}/>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
