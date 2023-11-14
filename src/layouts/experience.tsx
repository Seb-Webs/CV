import Heading from '@/comps/heading';
import Role from '@/comps/role';

const Experience = () => {
  var DesDesc = ['During my time at Design Culture I was the sole FE dev responsible for linking BE ACF schemas to responsive, flexible and customisable FE components aswell as maintenance work on existing sites and providing solutions to client update requests.','This work was mostly WP sites built with PHP, Twig for templating, SCSS, ACF and eventually Tailwind as I introduced this to the development stack.'];
  var CrocDesc = ['At The Croc I was responsible for a variety of existing projects and new site builds within the digital team. These sites ranged from standard Wordpress sites to Headless WP and Contentful component based NextJS React builds.','From receiving designs I would then build out pages, components and sites from start to testing and QA to production.','I was also responsible for maintenance on legacy sites including Hubspot pages, Bizzabo sites, PHP landing pages, bespoke web apps, front end changes to PMI’s sellers platform as well as some slightly different projects including some basic web games to increase engagement.'];
  var SnobDesc = ['My role at Snob Monkey was development of WordPress sites for a range of clients including eCommerce sites. All bespoke PHP WP themes many sites were created using a self built WP ACF template that evolved over my time with Snob Monkey.','This role also included some design work and on the fly design development as the agency team was small. Also during this time I developed some in house plugins that eventually made it to public distribution.'];
  var GreenDesc = ['Green Square was my first experience in web development, I worked here alongside my college education creating, maintaining and updating a range of clients predominantly using WordPress aswell as some single page sites. This was a great experience in seeing bespoke web development and design in practice.'];
  var FreeDesc = ['Since beginning my career in development I have taken on freelance projects from design to development.','The stack used for these projects has evolved alongside my experience and skillset from WP Builds to CraftCMS/Tailwind/NextJS builds.'];

  return (
    <section id="experience">
      <Heading title="Experience 📝"/>
      <Role title="Front End Developer" subTitle="Design Culture" startDate="Jul 2023" endDate=" Oct 2023" color="100" desc={DesDesc} />
      <Role title="Front End Developer" subTitle="The Croc" startDate="Jan 2022" endDate="May 2023" color="200" desc={CrocDesc} />
      <Role title="Web Developer" subTitle="Snob Monkey" startDate="Jan 2020" endDate="Dec 2021" color="300" desc={SnobDesc} />
      <Role title="Freelance Web Dev" subTitle="SebWebs" startDate="Jan 2017" endDate="" color="500" desc={FreeDesc} />
      <Role title="Junior Web Developer" subTitle="Green Square" startDate="Oct 2014" endDate="Aug 2016" color="400" desc={GreenDesc} />
    </section>
  );
};

export default Experience;