"use client";
import { useParams, useRouter } from "next/navigation";
import { sampleProjects } from "@/data/snapdata";
import Card from "@/components/ui/snapscard";

export default function ProjectSnapsPage() {
  const params = useParams();
  const router = useRouter();
  const projectIndex = params?.projectId;
  const index = Number(projectIndex);
  const project =
    !isNaN(index) && index >= 0 && index < sampleProjects.length
      ? sampleProjects[index]
      : undefined;

  if (!project) {
    return <div className="p-8 text-center">Project not found.</div>;
  }

  const handleBackClick = () => {
    router.push("/dashboard/snaps");
  };

  return ( 
      <div>
        <div className="flex justify-between mb-9.5 border-b border-gray-200 py-7.5">
          <h3
            onClick={handleBackClick}
            className="text-2xl font-bold text-gray-900 cursor-pointer"
          >
            <span className="underline">snaps</span> {project.Head}
          </h3>
          <span className="text-gray-500 text-base">
            {project.totalsnaps} snaps
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {project.additionalSnaps.map((snap, idx) => (
            <Card key={idx} {...snap} />
          ))}
        </div>
      </div>
  );
}
