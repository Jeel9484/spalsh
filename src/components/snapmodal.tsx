import React from "react";
import Image from "next/image";

interface SnapModalProps {
  open: boolean;
  onClose: () => void;
  image: string;
  title: string;
  author: string;
  date: string;
  time: string;
  location: string;
}

const SnapModal: React.FC<SnapModalProps> = ({
  open,
  onClose,
  image,
  title,
  author,
  date,
  time,
  location,
}) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-xl max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[-50px] right-0 text-4xl text-gray-400 hover:text-black z-10"
          aria-label="Close modal"
        >
          ×
        </button>
        {/* Image */}
        <div className="relative w-full h-[350px] sm:h-[400px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 px-10 py-12.5 bg-white gap-6">
          <div>
            <h3 className="font-bold text-sm mb-1">Location</h3>
            <span className="text-gray-600 text-base">{location}</span>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">Project</h3>
            <span className="text-gray-600 text-base">{title}</span>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">Date &amp; Time</h3>
            <span className="text-gray-600 text-base">
              {date} — {time}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">Author</h3>
            <span className="text-gray-600 text-base">{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapModal;
