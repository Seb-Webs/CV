interface SiteProps {
  title: string;
}

const Heading: React.FC<SiteProps> = ({ title }) => {
  return (
    <h1 className="sm:text-3xl text-2xl border-b border-tahiti-3 w-fit mt-12 mb-8">{title}</h1>
  );
};

export default Heading;