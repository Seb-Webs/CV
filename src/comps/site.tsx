import { Variants, color, motion } from 'framer-motion';
import React, { useEffect } from 'react';

const cardVariants: Variants = {
  offscreen: {
    rotate: 5,
    opacity: 0,
  },
  onscreen: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

const jobVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1
    }
  }
};

const colorBorders = {
  100: 'border-jobs-100 hover:shadow-jobs-100/10',
  200: 'border-jobs-200 hover:shadow-jobs-200/10',
  300: 'border-jobs-300 hover:shadow-jobs-300/10',
  400: 'border-jobs-400 hover:shadow-jobs-400/10',
  500: 'border-jobs-500 hover:shadow-jobs-500/10'
};

const colorText = {
  100: 'text-jobs-100',
  200: 'text-jobs-200',
  300: 'text-jobs-300',
  400: 'text-jobs-400',
  500: 'text-jobs-500'
};

const colorBG = {
  100: 'bg-jobs-100 border-jobs-100 hover:shadow-jobs-100/30 hover:text-jobs-100',
  200: 'bg-jobs-200 border-jobs-200 hover:shadow-jobs-200/30 hover:text-jobs-200',
  300: 'bg-jobs-300 border-jobs-300 hover:shadow-jobs-300/30 hover:text-jobs-300',
  400: 'bg-jobs-400 border-jobs-400 hover:shadow-jobs-400/30 hover:text-jobs-400',
  500: 'bg-jobs-500 border-jobs-500 hover:shadow-jobs-500/30 hover:text-jobs-500'
};

interface SiteProps {
  siteName: string;
  year: number;
  skills: string[];
  description: string;
  color: string;
  image: string;
  url: string;
}

const Site: React.FC<SiteProps> = ({ siteName, year, description, color, image, skills, url }) => {
  return (
    <motion.div variants={jobVariants}
    initial="offscreen"
    whileInView="onscreen"
    className={`${colorBorders[color]} job mt-8 sm:p-8 p-6 drop-shadow-sm rounded-lg border relative border-opacity-20 bg-gradient-to-t group hover:border-opacity-80 hover:from-darkblue-3 hover:to-darkblue-1 hover:shadow-lg transition duration-500`}>
      <div className="flex gap-6">
        <motion.div className="w-1/2" variants={cardVariants}>
          <a href={url} target="_blank" className="drop-shadow-sm cursor-pointer">
            <img src={image} alt={siteName} className={`${colorBorders[color]} rounded-lg border-t opacity-80 group-hover:opacity-100 duration-500 transition-opacity`}/>
          </a>
        </motion.div>
        <div className="w-1/2 opacity-80 group-hover:opacity-100 duration-500 transition-opacity">
          <div className="flex"></div>
          <h1 className="sm:text-3xl text-2xl max-w-fit leading-7">{siteName}</h1>
          <span className={`${colorText[color]} text-2xl mt-4`}>{year}</span>
        </div>
      </div>
      <p className="sm:text-lg text-md p-1 my-4 cursor-default opacity-80 group-hover:opacity-100 duration-500 transition-opacity">{description}</p>
      <div className="my-2 opacity-80 group-hover:opacity-100 duration-500 transition-opacity">
        {skills.map((skill,i) => (
          <span key={i} className={`${colorBG[color]} text-gray-100 bg-bluepale cursor-default font-light border px-3 py-1 mr-2 my-1 inline-block text-sm rounded-full font-worksans w-fit hover:scale-105 hover:bg-transparent hover:shadow-md transition duration-500`}>{skill}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default Site;