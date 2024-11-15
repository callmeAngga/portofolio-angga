import Image from "next/image";
import { StaticImageData } from "next/image";
import { FC } from 'react';

interface BlogCardProps {
  image: StaticImageData;
  title: string;
  preview: string;
  link: string;
  quote: string;
}

export const BlogCard: FC<BlogCardProps> = ({ image, title, preview, link }) => {
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={link}>
        <Image className="rounded-t-lg" src={image} alt={title} />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{preview}</p>
        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export const FavBlogCard: FC<BlogCardProps> = ({ image, title, link }) => {
  return (
    <div className="flex w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex-1 pr-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
        </a>
      </div>
      <div className="w-1/3">
        <a href={link}>
          <Image className="rounded-lg object-cover w-full h-full" src={image} alt={title} />
        </a>
      </div>
    </div>
  );
};

export const QuoteCard: FC<BlogCardProps> = ({quote}) => {
    return (
        <div>
            <p>{quote}</p>
        </div>
    )
}