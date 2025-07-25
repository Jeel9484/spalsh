// Type definitions
export interface Snap {
  image: string;
  title: string;
  author: string;
  date: string;
  time: string;
}

export interface Project {
  title: string;
  count: number;
  totalsnaps: number;
  images: string[];
  additionalSnaps: Snap[];
}

// Snaps data
export const snapsData: Snap[] = [
  {
    image: "/assets/img-1.jpg",
    title: "Project Title",
    author: "John P.",
    date: "12/12/23",
    time: "17:30h",
  },
  {
    image: "/assets/img-2.jpg",
    title: "Project Title",
    author: "John P.",
    date: "12/12/23",
    time: "17:30h",
  },
  {
    image: "/assets/img-3.jpg",
    title: "Project Title",
    author: "John P.",
    date: "12/12/23",
    time: "17:30h",
  },
  {
    image: "/assets/img-4.jpg",
    title: "Project Title",
    author: "John P.",
    date: "12/12/23",
    time: "17:30h",
  },
];

// Generate additional snaps for each project
export const generateAdditionalSnaps = (baseImage: string, count: number, title: string): Snap[] => {
  return Array(count).fill(0).map((_, i) => ({
    image: baseImage.replace(/\d+\.jpg$/, `${(i % 4) + 1}.jpg`),
    title: `${title} - Snap ${i + 1}`,
    author: "Project Member",
    date: "12/12/23",
    time: `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}h`,
  }));
};

// Sample projects
export const sampleProjects: Project[] = [
  {
    title: "Project Title",
    count: 29,
    totalsnaps: 32,
    images: [
      "/assets/sa-1.jpg",
      "/assets/sa-2.jpg",
      "/assets/sa-3.jpg",
      "/assets/sa-4.jpg",
    ],
    additionalSnaps: generateAdditionalSnaps("/assets/sa-1.jpg", 29, "Project Title"),
  },
  {
    title: "Desert Project",
    count: 13,
    totalsnaps: 16,
    images: [
      "/assets/sa-5.jpg",
      "/assets/sa-6.jpg",
      "/assets/sa-7.jpg",
      "/assets/sa-8.jpg",
    ],
    additionalSnaps: generateAdditionalSnaps("/assets/sa-5.jpg", 13, "Desert Project"),
  },
  {
    title: "Project Title",
    count: 25,
    totalsnaps: 28,
    images: [
      "/assets/sa-9.jpg",
      "/assets/sa-10.jpg",
      "/assets/sa-11.jpg",
      "/assets/sa-12.jpg",
    ],
    additionalSnaps: generateAdditionalSnaps("/assets/sa-9.jpg", 25, "Project Title"),
  },
  {
    title: "Project Title",
    count: 9,
    totalsnaps: 12,
    images: [
      "/assets/sa-13.jpg",
      "/assets/sa-14.jpg",
      "/assets/sa-15.jpg",
      "/assets/sa-16.jpg",
    ],
    additionalSnaps: generateAdditionalSnaps("/assets/sa-13.jpg", 9, "Project Title"),
  },
];
