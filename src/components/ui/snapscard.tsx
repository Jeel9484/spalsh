"use client";
import React, { useState } from "react";
import Image from "next/image";
import SnapModal from "../snapmodal";

export interface CardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  time: string;
  location: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  author,
  date,
  time,
  location,
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-white overflow-hidden ${className}`}>
      <div className="relative cursor-pointer" onClick={() => setOpen(true)}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={320}
          className="w-full h-50 object-cover"
        />
      </div>
      <div className="p-4">
        <div className="font-semibold text-gray-900 text-base">{title}</div>
        <div className="text-gray-500 text-sm mt-1">{author}</div>
      </div>

      {/* Custom Modal */}
      <SnapModal
        open={open}
        onClose={() => setOpen(false)}
        image={image}
        title={title}
        author={author}
        date={date}
        time={time}
        location={location}
      />
    </div>
  );
};

export default Card;
