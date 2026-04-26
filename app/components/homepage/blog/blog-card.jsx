// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#4a0000a0] hover:border-red-600 transition-all duration-500 bg-[#0a0000] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-red-400 text-sm">
          <p>{new Date(blog.published_at).toLocaleDateString()}</p>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-red-600'>
            {blog.title}
          </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 line-clamp-3'>
          {blog.description}
        </p>
        {blog.tools && (
          <div className="flex flex-wrap gap-2 mt-2 pb-3">
            {blog.tools.map((tool, index) => (
              <span 
                key={index} 
                className="bg-red-950/50 border border-red-800 text-red-200 text-[10px] lg:text-xs px-2 py-1 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;