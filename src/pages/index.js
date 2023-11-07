import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../css/styles.module.css';  // assuming you have a styles.module.css file in the same directory

function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A project dedicated to recycling beer waste using fungi.">
      
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">FungiRecycle</h1>
          <p className="hero__subtitle">Recycling waste using innovative fungal methods</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="/docs/introduction">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      
      {/* You can add more content below, like features, testimonials, etc. */}
    </Layout>
  );
}

export default Home;
