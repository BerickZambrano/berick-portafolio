// @flow strict

import * as React from 'react';
import Image from 'next/image';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0a0000] border-[#4a0000a0] relative rounded-lg border bg-gradient-to-r to-[#1a0000] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-800 to-red-950"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-red-900 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-red-400 text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      {/* Diploma Area */}
      <div className="px-4 lg:px-8 py-4 lg:py-8 flex justify-center border-t-[2px] border-[#4a0000a0]">
        <div className="w-full h-48 lg:h-64 border-2 border-dashed border-[#4a0000a0] rounded-lg flex flex-col items-center justify-center bg-[#1a000050] hover:bg-[#2a000050] transition-colors cursor-pointer group relative overflow-hidden">
          {project.image ? (
             <Image 
               src={project.image} 
               alt={project.name} 
               layout="fill"
               objectFit="cover"
               className="rounded-lg"
             />
          ) : (
            <>
              <div className="text-red-500 mb-2 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>
              </div>
              <span className="text-gray-400 text-sm font-mono uppercase tracking-widest">Subir Diploma</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;