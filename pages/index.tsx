import getConfig from 'next/config';

import Layout from '@/components/Layout';
import RegistrationForm from '@/components/RegistrationForm'
import styles from '@/styles/country-selection.module.css'

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <h1>Merchant Country Selection</h1>
        <RegistrationForm />
      </div>
    </Layout>
  );
};

export default Home;
