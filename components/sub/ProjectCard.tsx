import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href?: string;
}

const ProjectCard = ({ href, src, title, description }: Props) => {
  return (
    <a href={href} className="relative overflow-hidden rounded-lg shadow-lg border border-green-700 bg-black/80 block hover:scale-105 transition-transform duration-300 w-full">
      
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[300px] "
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;