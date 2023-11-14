import { useRouter } from 'next/router';
import Heading from "@/comps/heading";

const Contact = () => {
  const router = useRouter();

  return (
    <section id="contact" className="mt-8">
      <Heading title="Contact 📞"/>
      <p className="flex text-base max-w-[340px]">I am currently available for both contract & freelance work, so feel free to get in touch!</p>
      <a href="mailto:seb.j.haywood@gmail.com" className="flex text-xl mt-8 opacity-75 hover:opacity-100 transition"><span className="mr-2">📧</span> seb.j.haywood@gmail.com</a>
      <p className="flex text-xl mt-3 opacity-75"><span className="ml-1 sm:mr-4 mr-3">📍</span> East London, UK</p>
      <a href="https://www.linkedin.com/in/seb-haywood-00a2bb213/" target="_blank" rel="noopener noreferrer" className="flex text-xl mt-3 opacity-75 hover:opacity-100 transition"><img className="w-5 ml-1 mt-1 h-fit mr-3" src={`${router.basePath}/assets/images/li.png`}/>Connect on Linkedin!</a>
      <a href="https://github.com/Seb-Webs" target="_blank" rel="noopener noreferrer" className="flex text-xl mt-3 opacity-75 hover:opacity-100 transition"><img className="w-5 ml-1 mt-1 h-fit mr-3" src={`${router.basePath}/assets/images/git.png`}/>GitHub</a>
      <p className="text-base mt-2 opacity-75 max-w-[300px] mt-20 mb-4">Built with <a href="https://react.dev/"><b>React</b></a>, <a href="https://nextjs.org/"><b>NextJS</b></a> and <a href="https://tailwindcss.com/"><b>Tailwind</b></a>.</p>
    </section>
  );
};

export default Contact;