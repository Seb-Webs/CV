import { Variants, color, motion } from 'framer-motion';
import React, { useEffect } from 'react';

const roleVariants: Variants = {
  offscreen: {
    top: 1000,
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

const colorBorders = {
  100: 'border-jobs-100',
  200: 'border-jobs-200',
  300: 'border-jobs-300',
  400: 'border-jobs-400',
  500: 'border-jobs-500'
};

const colorBG = {
  100: 'bg-jobs-100 after:border-l-jobs-100',
  200: 'bg-jobs-200 after:border-l-jobs-200',
  300: 'bg-jobs-300 after:border-l-jobs-300',
  400: 'bg-jobs-400 after:border-l-jobs-400',
  500: 'bg-jobs-500 after:border-l-jobs-500'
};

const hoverBorders = {
  100: 'hover:shadow-jobs-100/10',
  200: 'hover:shadow-jobs-200/10',
  300: 'hover:shadow-jobs-300/10',
  400: 'hover:shadow-jobs-400/10',
  500: 'hover:shadow-jobs-500/10'
};

interface SiteProps {
  title: string;
  subTitle: string;
  startDate: string;
  endDate: string;
  desc: string[];
  color: string;
};

const Site: React.FC<SiteProps> = ({ title, subTitle, startDate, endDate, color, desc }) => {
  return (
    <motion.div         
    variants={roleVariants}
    initial="offscreen"
    whileInView="onscreen">
      <div className={`${hoverBorders[color]} ${colorBorders[color]} role mt-8 bg-gradient-to-br from-darkblue-1 to-darkblue-3 sm:p-8 p-5 drop-shadow-sm rounded-lg border border-opacity-20 brightness-100 hover:border-opacity-80 hover:shadow-lg hover:brightness-110 transition duration-500`}>
        <div className="flex">
          <div className="sm:w-1/2 w-1/3">
            <h2 className="sm:text-xl text-base">{title}</h2>
            <h4 className="sm:text-md text-sm font-light">{subTitle}</h4>
          </div>

          <div className="flex sm:w-1/2 w-2/3 text-xl justify-end pr-4 mt-1 h-[30px]">
            <p className={`${colorBG[color]} lg:hidden xl:block px-2 drop-shadow-sm text-base leading-[30px] after:absolute after:border-l-[10px] after:border-t-[15px] after:border-b-[15px] after:border-t-transparent after:border-b-transparent after:ml-[8px]`}>{startDate}</p>
            <p className={`${colorBG[color]} lg:hidden xl:block mx-3 w-[10px] drop-shadow-sm before:absolute before:border-l-[10px] before:border-t-[15px] before:border-b-[15px] before:border-l-darkblue-4 before:border-t-transparent before:border-b-transparent after:absolute after:border-l-[10px] after:border-t-[15px] after:border-b-[15px] after:border-t-transparent after:border-b-transparent after:ml-[10px]`}></p>
            {endDate && (
              <p className={`${colorBG[color]} lg:hidden xl:block px-2 drop-shadow-sm text-base leading-[30px] before:absolute before:border-l-[10px] before:border-t-[15px] before:border-b-[15px] before:border-t-transparent before:border-b-transparent before:border-l-darkblue-4 before:ml-[-16px] pl-4`}>{endDate}</p>
            )}
          </div>
        </div>
        <div className={`${colorBorders[color]} text-base mt-4 border-t pt-2`}>
          {desc.map((para,i) => (
            <p key={i} className="mt-4">{para}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Site;