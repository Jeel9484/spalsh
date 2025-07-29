"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, SearchNormal1 } from "iconsax-reactjs";
import {
  mockSearchResults,
  SearchResultsData,
  Snap,
  LOGO,
} from "@/data/headerdata";

const CAPACITY = 75;

const SnapSearchResult: React.FC<Snap> = ({ image, title, author }) => (
  <div className="flex items-center justify-between gap-3 px-2 py-2 hover:bg-gray-50 cursor-pointer">
  <div className="flex items-center gap-3 min-w-0">
    <div className="w-14 h-14 relative overflow-hidden flex-shrink-0">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="min-w-0">
      <h4 className="font-bold text-base text-gray-900 truncate">{title}</h4>
      <div className="text-sm text-gray-400 truncate">
        {author}
      </div>
    </div>
  </div>
  {/* Right: Arrow */}
  <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
  </div>
);

interface SearchResultsProps {
  results: SearchResultsData;
  isVisible: boolean;
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isVisible,
  onClose,
}) => {
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const activeIndices = [0];

  return (
    <div
      ref={resultsRef}
      className="absolute top-full left-64 w-[432px] bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden"
    >
      <div className="px-5">
        <div className="border-b border-gray-200 mb-7.5">
          <div className="flex justify-between mt-5 mb-5">
            <h3 className="text-sm font-semibold text-gray-500 ">Users</h3>
            <span className="font-bold text-black text-xs underline">
              All users
            </span>
          </div>
          <div className="space-y-1 mb-7.5">
            {results.users.map((user, idx) => (
              <div
                key={user.id}
                className={`flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer`}
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  width={34}
                  height={34}
                  className={`rounded-full w-8.5 h-8.5 object-cover
                    ${activeIndices.includes(idx) ? "bg-primary" : "bg-light-gray grayscale"}
                    `}
                />
                <h4 className="font-medium text-sm">{user.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-gray-200 mb-7.5">
          <div className="flex justify-between mb-5">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Projects
            </h3>
            <span className="font-bold text-black text-xs underline">
              All Projects
            </span>
          </div>
          <div className="space-y-1 mb-7.5">
            {results.projects.map((project) => (
              <div
                key={project.id}
                className="p-2 hover:bg-gray-50 rounded-md cursor-pointer"
              >
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-sm">{project.title}</h4>
                    <p className="text-xs text-gray-500">{project.name}</p>
                  </div>
                  <div>
                    <ArrowRight size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-5">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Snaps</h3>
            <span className="font-bold text-black text-xs underline">
              All snaps
            </span>
          </div>
          <div className="space-y-1">
            {results.snaps.map((snap) => (
              <SnapSearchResult key={snap.id} {...snap} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredResults, setFilteredResults] =
    useState<SearchResultsData>(mockSearchResults);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults(mockSearchResults);
      return;
    }

    const query = searchQuery.toLowerCase();

    const filtered: SearchResultsData = {
      projects: mockSearchResults.projects.filter((p) =>
        p.title.toLowerCase().includes(query)
      ),
      snaps: mockSearchResults.snaps.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.author.toLowerCase().includes(query)
      ),
      users: mockSearchResults.users.filter(
        (u) =>
          u.name.toLowerCase().includes(query) ||
          u.image.toLowerCase().includes(query)
      ),
    };

    setFilteredResults(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.trim() !== "");
  };

  return (
    <header className="w-full sticky top-0 bg-white border-b border-gray-200 z-50 h-[91px]">
      <div className=" flex items-center justify-between px-8 py-7">
        {/* Logo and search input */}
        <div>
          <Image
            src={LOGO}
            alt="logo"
            width={30}
            height={30}
            className="h-8 w-auto"
          />
        </div>
        {/* Search input */}
        <div className="flex items-center gap-2 mr-auto ml-[160px]">
          <SearchNormal1 className="w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Looking for something?"
            className="w-fit px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-sm"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery.trim() !== "" && setShowResults(true)}
          />
          <SearchResults
            results={filteredResults}
            isVisible={showResults}
            onClose={() => setShowResults(false)}
          />
        </div>

        {/* Capacity section */}
        <div className="flex items-center gap-4 min-w-[220px]">
          <span className="text-gray-500 text-base font-medium">Capacity</span>
          <div className="relative flex-1 w-[140px] h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${CAPACITY}%` }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-0 left-0 h-2 bg-yellow-400 rounded-full"
            />
          </div>
          <span className="font-semibold text-gray-950 text-base">
            {CAPACITY}%
          </span>
        </div>
      </div>
    </header>
  );
}
