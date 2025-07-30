"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "./snapscard";

interface SnapProjectCardProps {
  images: string[];
  title: string;
  count: number;
  totalsnaps: number;
  projectIndex?: number; // Add project index for navigation
  additionalSnaps?: {
    image: string;
    title: string;
    author: string;
    date: string;
    time: string;
  }[];
}

export default function SnapProjectCard({
  images,
  title,
  count,
  totalsnaps,
  projectIndex,
  additionalSnaps = [],
}: SnapProjectCardProps) {
  const [showAdditionalSnaps, setShowAdditionalSnaps] = useState(false);
  const router = useRouter();

  // Generate mock data if no additional snaps are provided
  const snapsToShow =
    additionalSnaps.length > 0
      ? additionalSnaps
      : Array(count)
          .fill(0)
          .map((_, i) => ({
            image: images[i % images.length],
            title: `${title} - Snap ${i + 1}`,
            author: "Project Member",
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          }));

  const handleShowMore = () => {
    if (projectIndex !== undefined) {
      // Navigate to individual project page
      router.push(`/dashboard/snaps/${projectIndex}`);
    } else {
      // Fallback to modal
      setShowAdditionalSnaps(!showAdditionalSnaps);
    }
  };

  const handleCardClick = () => {
    if (projectIndex !== undefined) {
      router.push(`/dashboard/snaps/${projectIndex}`);
    }
  };

  return (
    <div
      className="w-full max-w-[400px] cursor-pointer"
      onClick={handleCardClick}
    >
      {/* 2x2 image grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-1 mb-2">
        {images.slice(0, 3).map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Snap ${idx + 1}`}
            width={100}
            height={100}
            className="rounded object-cover h-[80px] w-full"
          />
        ))}
        <div
          className="relative h-[80px] rounded overflow-hidden cursor-pointer"
          onClick={handleShowMore}
        >
          <Image src={images[3]} alt="Snap 4" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">+{count}</span>
          </div>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500">{totalsnaps} snaps</p>

      {/* Modal to display additional snaps */}
      {showAdditionalSnaps && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleShowMore}
        >
          <div
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">{title} - All Snaps</h2>
              <button
                onClick={handleShowMore}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {snapsToShow.map((snap, idx) => (
                  <Card location="Montecarlo QC" key={idx} {...snap} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
