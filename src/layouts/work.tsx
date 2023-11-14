import { useRouter } from 'next/router';
import Site from '@/comps/site';
import Heading from '@/comps/heading';

const Work = () => {
  const router = useRouter();
  var MoraeSkills = ['React','Headless WP','NextJS','GraphQL','Tailwind','PHP','ACF'];
  var SRISkills = ['React','Headless WP','NextJS','GraphQL','Tailwind','PHP','ACF','BrowserStack'];
  var SohonetSkills = ['WP Sage','PHP','JavaScript','jQuery','ACF','CSS/SCSS','BrowserStack'];
  var MillimanSkills = ['PHP','JavaScript','jQuery','REST API','Bizzabo', 'SCSS', 'HTML'];

  return (
    <section className="font-worksans" id="recent">
      <Heading title="Recent Work 💻"/>
      <Site siteName="Morae" year={2023} skills={MoraeSkills} color="100" url="https://www.moraeglobal.com/" image={`${router.basePath}/assets/images/morae.png`} description="Morae runs as a headless WordPress build feeding GraphQL data to a React, NextJS, Tailwind front end. My responsibilties on this project was to create individual components that can be selected in the WordPress drag and drop CMS written as a complex ACF Schema which then in turn creates GraphQL fragments to pass CMS data to the respective React components." />
      <Site siteName="SRI Executive Search" year={2023} skills={SRISkills} color="200" url="https://sriexecutive.com/" image={`${router.basePath}/assets/images/sri.png`}  description="SRI runs on the next version of the headless WP boilerplate we developer at The Croc feeding GraphQL data to a React, NextJS, Tailwind front end. My responsibilties on this project was to create individual components that can be selected in the WordPress drag and drop CMS written as a complex ACF Scheme which then in turn creates GraphQL fragments to pass CMS data to the respective React components. I was also responsible for QA and browser, accessibility and device testing for each component and page in this project." />
      <Site siteName="Sohonet" year={2022} skills={SohonetSkills} color="300" url="https://www.sohonet.com/" image={`${router.basePath}/assets/images/sohonet.png`} description="Sohonet was primarily built using a WP Sage Theme that had been developed by The Croc. I joined this project towards the end, creating some PHP components along with triple nested pricing slider and product price calculator. I was also responsible for maintenance of this project for the length of my time at The Croc." />
      <Site siteName="Milliman Labs" year={2023} skills={MillimanSkills} color="400" url="https://labs.milliman.com/" image={`${router.basePath}/assets/images/milliman.png`} description="Milliman Labs ran a four part event on insurance technology. I was responsible for each events page aswell as the landing pages for the event series. The event CMS system used for this was Bizzabo feeding speaker, agenda, event, community and the live streams data to the front end using an API call. The front end is created with PHP, JavaScript, some jQuery and SCSS." />
    </section>
  );
};

export default Work;