"use client";
import Card from "@/components/ui/snapscard";
import { FaAngleDown } from "react-icons/fa";
import SnapProjectCard from "@/components/ui/snapsprojectcard";
import { snapsData, sampleProjects } from "@/data/snapdata";

export default function SnapsPage() {

  return (
    <>
      <section className="border-b border-gray-200 py-7 mb-9">
        <h1 className="text-3xl font-medium text-gray">Snaps</h1>
      </section>

      <section className=" border-b border-gray-200 mb-9">
        <div className="flex justify-between mb-6">
          <h2 className="text-gray-600 font-semibold text-base">
            Latest Snaps
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {snapsData.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between">
          <h2 className="text-base font-semibold text-gray">
            Projects (8)
          </h2>
          <div className="inline-flex gap-2 items-center">
            <span className="text-gray-500 text-base">Recently added</span>
            <FaAngleDown />
          </div>
        </div>
          <div className="py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {sampleProjects.map((project, i) => (
                <SnapProjectCard key={i} {...project} />
              ))}
            </div>
          </div>
      </section>
    </>
  );
}
