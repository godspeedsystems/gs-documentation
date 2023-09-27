import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={`${styles.customBanner} container`}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button"
            to="https://www.youtube.com/watch?v=f1jlvaM7Sbo">
            <button className={styles.doc_button1}>Godspeed Tutorial - 10mins 📽️</button>
          </Link>
          <Link
            className="button"
            to="/docs/getting_started/overview">
            <button className={styles.doc_button2}>Godspeed getting started - 5mins 📝</button>
          </Link>
          <Link
            className="button"
            to="https://www.youtube.com/@godspeed.systems">
            <button className={styles.doc_button3}>
              Godspeed Youtube channel 
              <img width={27} src='https://ik.imagekit.io/pavanKillada/youtube-svgrepo-com.svg?updatedAt=1695728641380' alt='youtube icon'/>
            </button>
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting_started/overview">
            Godspeed Tutorial - 5min ⏱️
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting_started/overview">
            Godspeed Tutorial - 5min ⏱️
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
