
import React from 'react';
import Layout from '@/components/layout/Layout';
import WebsitePackageHero from '@/components/website-package/WebsitePackageHero';
import WebsitePackageProblem from '@/components/website-package/WebsitePackageProblem';
import WebsitePackageSolution from '@/components/website-package/WebsitePackageSolution';
import WebsitePackageComparison from '@/components/website-package/WebsitePackageComparison';
import WebsitePackageProof from '@/components/website-package/WebsitePackageProof';
import WebsitePackageProcess from '@/components/website-package/WebsitePackageProcess';
import WebsitePackageAfterLaunch from '@/components/website-package/WebsitePackageAfterLaunch';
import WebsitePackageFAQ from '@/components/website-package/WebsitePackageFAQ';
import WebsitePackageFinalCTA from '@/components/website-package/WebsitePackageFinalCTA';

const WebsiteDesignPackage = () => {
  return (
    <Layout>
      <WebsitePackageHero />
      <WebsitePackageProblem />
      <WebsitePackageSolution />
      <WebsitePackageComparison />
      <WebsitePackageProof />
      <WebsitePackageProcess />
      <WebsitePackageAfterLaunch />
      <WebsitePackageFAQ />
      <WebsitePackageFinalCTA />
    </Layout>
  );
};

export default WebsiteDesignPackage;
