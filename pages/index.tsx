import getConfig from 'next/config';

import Layout from '@/components/Layout';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <section>
         <div>Welcome to Deal Drop</div>
      </section>
    </Layout>
  );
};

export default Home;
