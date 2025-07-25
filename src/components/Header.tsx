"use client";

import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdCalendarToday, MdAccessTime } from "react-icons/md";
import {
  mockSearchResults,
  SearchResultsData,
  Snap,
} from "@/data/headerdata";

const CAPACITY = 75;

const SnapSearchResult: React.FC<Snap> = ({ image, title, author, date, time }) => (
  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
    <div className="w-12 h-12 relative rounded overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div>
      <h4 className="font-medium text-sm">{title}</h4>
      <div className="text-xs text-gray-500 flex items-center gap-2">
        <span>{author}</span>
        <span className="flex items-center gap-1">
          <MdCalendarToday size={10} /> {date}
        </span>
        <span className="flex items-center gap-1">
          <MdAccessTime size={10} /> {time}
        </span>
      </div>
    </div>
  </div>
);

interface SearchResultsProps {
  results: SearchResultsData;
  isVisible: boolean;
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isVisible, onClose }) => {
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
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

  return (
    <div
      ref={resultsRef}
      className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden"
    >
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Projects</h3>
          <div className="space-y-1">
            {results.projects.map((project) => (
              <div key={project.id} className="p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <h4 className="font-medium text-sm">{project.title}</h4>
                <p className="text-xs text-gray-500">{project.snaps} snaps</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Snaps</h3>
          <div className="space-y-1">
            {results.snaps.map((snap) => (
              <SnapSearchResult key={snap.id} {...snap} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Users</h3>
          <div className="space-y-1">
            {results.users.map((user) => (
              <div key={user.id} className="p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <h4 className="font-medium text-sm">{user.name}</h4>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-3 text-center border-t border-gray-200">
        <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
          View all results
        </button>
      </div>
    </div>
  );
};

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredResults, setFilteredResults] = useState<SearchResultsData>(mockSearchResults);

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
          u.role.toLowerCase().includes(query)
      ),
    };

    setFilteredResults(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.trim() !== "");
  };

  return (
    <header className="w-full sticky top-0 bg-white border-b border-gray-200 z-10">
      <div className="flex items-center justify-between px-8 pt-8 mb-8.5">
        {/* Search input */}
        <div className="flex items-center gap-2 w-1/2 relative">
          <IoIosSearch className="w-6 h-6 text-gray-400" />
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
          <span className="font-semibold text-gray-950 text-base">{CAPACITY}%</span>
        </div>
      </div>
    </header>
  );
}
