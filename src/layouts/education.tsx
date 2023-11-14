import Heading from '@/comps/heading';
import Role from '@/comps/role';

const Education = () => {
  var UniDesc = ['Dissertation Title: Music Recommendation Web App based on Film Preferences.'];

  return (
    <section id="education">
      <Heading title="Education 🎓"/>
      <Role title="Queen Mary University London" subTitle="Computer Science BSc" startDate="Sep 2016" endDate="June 2019" color="100" desc={UniDesc} />
    </section>
  );
};

export default Education;