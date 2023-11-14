import { Variants, motion } from "framer-motion";
import Heading from '@/comps/heading';

var skills = ['PHP','JavaScript','HTML','CSS/SCSS','jQuery','Tailwind','React','NextJS','WordPress','Craft CMS','GraphQL','TypeScript','SQL','AJAX','Bootstrap','Python','Java','JSON','SEO','Git','WordPress','Headless','GraphQL','BrowserStack','AWS','XML','Apache','Vercel','Webpack','Docker','Storybook','Figma','Contentful','ACF','Shopify','Adobe','BrowserStack','GSAP','Audio Production','Video Editing','CSSAnimations','REST'];

const skillVarients: Variants = {
  offscreen: {
    top: 100,
    opacity: 0,
  },
  onscreen: {
    top: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3
    }
  }
};

const Skills = () => {
  return (
    <section className="mt-8" id="skills">
      <Heading title="My Skills ⚙️"/>
      <div className="mt-8 mb-16">
        {skills.map((skill, i) => (
          <motion.span key={i} variants={skillVarients} initial="offscreen" whileInView="onscreen" className="text-gray-100 bg-tahiti-2 border-tahiti-2 hover:shadow-tahiti-3/30 hover:text-tahiti-3 cursor-default font-light border px-3 py-1 mr-2 my-1 inline-block text-sm rounded-full font-worksans w-fit hover:scale-105 hover:bg-transparent hover:shadow-md transition duration-500">{skill}</motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;