import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Standardized implementations or integrations across frameworks',
    Svg: require('@site/static/img/undraw_building_websites_i78t.svg').default,
    description: (
      <>
        "Standardized implementations or integrations across frameworks" means that in software development, there is a focus on adopting consistent and well-documented approaches to incorporate different software components into a project, and these practices are applied consistently across various software frameworks. This approach can lead to more efficient development, easier maintenance, and better compatibility between different parts of a software system.
      </>
    ),
  },
  {
    title: 'Complete stack solution',
    Svg: require('@site/static/img/undraw_learning_sketching_nd4f.svg').default,
    description: (
      <>
        A "complete stack solution" in software development is a pre-configured package of tools and technologies that covers the entire application development process. It includes front-end and back-end frameworks, database management, middleware, deployment guidance, security measures, monitoring tools, scalability strategies, documentation, and development environment recommendations. This integrated approach streamlines development, making it easier to create fully functional applications while adhering to best practices. The specific components can vary depending on project requirements and goals.
      </>
    ),
  },
  {
    title: 'Schema driven development',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg').default,
    description: (
      <>
        Schema-driven development is an approach where a formal schema or specification defines an application's structure, data models, UI, and behavior. It streamlines development by enabling code and UI generation based on the schema, ensuring consistency and flexibility. It's useful for data-intensive apps, and tools like GraphQL and JSON Schema facilitate its implementation, making it easier to adapt to evolving requirements.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
