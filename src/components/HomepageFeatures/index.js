import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blog',
    Svg: require('@site/static/img/top_blog.svg').default,
    description: (
      <>
        メインコンテンツです。
      </>
    ),
  },
  {
    title: 'Slides',
    Svg: require('@site/static/img/top_slides.svg').default,
    description: (
      <>
        Slidevでスライド作ります。
      </>
    ),
  },
  {
    title: 'Youtube',
    Svg: require('@site/static/img/top_youtube.svg').default,
    description: (
      <>
        動画も作るかも
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
