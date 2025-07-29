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
        <div className="grid grid-cols-1 sm:grid-cols-4 px-8 py-8 bg-white gap-6">
          <div>
            <div className="font-bold text-sm mb-1">Location</div>
            <div className="text-gray-600 text-base">{location}</div>
          </div>
          <div>
            <div className="font-bold text-sm mb-1">Project</div>
            <div className="text-gray-600 text-base">{title}</div>
          </div>
          <div>
            <div className="font-bold text-sm mb-1">Date &amp; Time</div>
            <div className="text-gray-600 text-base">
              {date} — {time}
            </div>
          </div>
          <div>
            <div className="font-bold text-sm mb-1">Author</div>
            <div className="text-gray-600 text-base">{author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapModal;
