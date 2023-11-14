import type { ReactNode } from 'react';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const MenuItems = [
  ['bio','Bio 👋'],
  ['experience','Experience 📝'],
  ['education','Education 🎓'],
  ['recent','Recent Work 💻'],
  ['skills', 'My Skills ⚙️'],
  ['contact','Contact 📞'],
];

const Main = (props: IMainProps) => (
  <div className="bg-darkblue-1 font-Varela">
    <div className="w-full min-h-screen max-w-screen-xl mx-auto antialiased sm:px-12 px-4 py-18 overflow-hidden sm:overflow-visible">
      {props.meta}
      <div className="lg:flex lg:justify-between lg:gap-12 text-offWhite">
        <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-[500px] lg:justify-between lg:w-1/2">
          <div className="pb-8 pt-16">
            <h1 className="text-5xl font-medium border-b border-tahiti-3 w-fit">
              {AppConfig.title}
            </h1>
            <h2 className="text-2xl mt-4">{AppConfig.role}</h2>
            <p className="text-base mt-2 opacity-75 max-w-[300px]">{AppConfig.description} 🚀</p>
          </div>
          <nav className="nav lg:block">
            <ul>
              {MenuItems.map((item, i) => (
                <li key={i} className="mt-3 cursor-pointer w-fit text-md opacity-60 hover:opacity-100 hover:translate-x-2 transition duration-300">
                  <Link to={item[0]} smooth={true} duration={1000}>{item[1]}</Link>
                </li>            
              ))}
            </ul>
          </nav>
        </header>
        <main className="lg:w-1/2">
          {props.children}
        </main>
      </div>
    </div>
  </div>
);

export { Main };
