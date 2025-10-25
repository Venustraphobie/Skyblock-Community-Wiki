import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import '../css/index.css';
import Link from '@docusaurus/Link';
import Image from '../components/image';
import Translate from '@docusaurus/Translate';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="A community-driven Skyblock wiki">
      <main className={"homepage-main"}>
        <Image src='img/skyblock_icon.webp' alt='Cytooxien Skyblock Logo'></Image>
        <Heading as='h1'>{ siteConfig.title }</Heading>
        <p><Translate>home.tagline</Translate></p>
        <Link href='./docs/intro' className={"homepage-start-button"}><Translate>home.introduction</Translate></Link>
      </main>
    </Layout>
  );
}
