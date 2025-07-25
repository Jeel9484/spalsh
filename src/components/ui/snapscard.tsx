import React from "react";
import {Calendar,Timer1} from "iconsax-reactjs"

// This interface is generic for reusability, you can rename or expand it as needed.
export interface CardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  time: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  author,
  date,
  time,
  className = "",
}) => (
  <div className={`bg-white overflow-hidden`}>
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-50 object-cover"
      />
      {/* Date & Time overlay */}
      <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/90 px-3 py-1 rounded-2xl text-xs font-medium">
        <span className="flex items-center gap-1">
          <Calendar className="text-black"/> {date}
        </span>
        <span className="flex items-center gap-1">
          <Timer1 className="text-black" />  {time}
        </span>
      </div>
    </div>
    <div className="p-4">
      <div className="font-semibold text-gray-900 text-base">{title}</div>
      <div className="text-gray-500 text-sm mt-1">{author}</div>
    </div>
  </div>
);

export default Card;
