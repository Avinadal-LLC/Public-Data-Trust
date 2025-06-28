import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Currated by Dedicated Experts',
    Svg: require('@site/static/img/Eye.svg').default,
    description: (
      <>
        Everything found on this website has been carefully selected and reviewed by a team of experts to ensure that it is relevant and accurate.
      </>
    ),
  },
  {
    title: 'Provided Legally and Ethically',
    Svg: require('@site/static/img/Shield.svg').default,
    description: (
      <>
        The PDT Foundation is committed to providing information that is not only accurate but also legally and ethically sourced. We adhere to the highest standards of data governance and compliance.
      </>
    ),
  },
  {
    title: 'Non-Partisan and Non-Political',
    Svg: require('@site/static/img/Compass.svg').default,
    description: (
      <>
        None of the content on this website is influenced by any political or partisan agenda. We are dedicated to providing unbiased information that serves the public interest.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
