import { AppConfig } from '@/utils/AppConfig';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Intro from '@/comps/intro';
import Experience from '@/layouts/experience';
import Work from '@/layouts/work';
import Skills from '@/comps/skills';
import Education from '@/layouts/education';
import Contact from '@/layouts/contact';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={AppConfig.title}
          description={AppConfig.description}
        />
      }
    >
      <Intro />
      <Experience />
      <Education />
      <Work />
      <Skills />
      <Contact />
    </Main>
  );
};

export default Index;
