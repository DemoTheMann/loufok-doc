import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Système de collaboration',
    Svg: require('@site/static/img/collab.svg').default,
    description: (
      <>
        Loufok est une application basée sur la collaboration pour créer une oeuvre. Votre coopération
        permet la création de nouvelles histoires toutes plus loufoques les unes que les autres. 
      </>
    ),
  },
  {
    title: 'Récits surréalistes',
    Svg: require('@site/static/img/surrealiste.svg').default,
    description: (
      <>
        Laissez parler votre créativité avec les cadavre exquis revisités sur Loufok !
        Apportez votre grain de folie aux histoires courtes de Loufok pour créer un récit surréaliste. 
      </>
    ),
  },
  {
    title: 'L\'imagination au centre',
    Svg: require('@site/static/img/imagine.svg').default,
    description: (
      <>
        Votre imagination est au centre de l'application. C'est elle qui va faire vivre et rendre 
        les récits attrayants et originaux, ne soyez pas timides, lâchez-vous !
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
        <Heading as="h3">{title}</Heading>
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
