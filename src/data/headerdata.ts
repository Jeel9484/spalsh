export interface Project {
  id: number;
  title: string;
  snaps: number;
}

export interface Snap {
  id: number;
  image: string;
  title: string;
  author: string;
  date: string;
  time: string;
}

export interface User {
  id: number;
  name: string;
  role: string;
}

export interface SearchResultsData {
  projects: Project[];
  snaps: Snap[];
  users: User[];
}

export const mockSearchResults: SearchResultsData = {
  projects: [
    { id: 1, title: "Project Alpha", snaps: 32 },
    { id: 2, title: "Desert Project", snaps: 16 },
    { id: 3, title: "Urban Landscape", snaps: 28 },
  ],
  snaps: [
    {
      id: 1,
      image: "/assets/img-1.jpg",
      title: "Mountain View",
      author: "John P.",
      date: "12/12/23",
      time: "17:30h",
    },
    {
      id: 2,
      image: "/assets/img-2.jpg",
      title: "City Skyline",
      author: "Sarah M.",
      date: "11/10/23",
      time: "09:45h",
    },
    {
      id: 3,
      image: "/assets/img-3.jpg",
      title: "Forest Trail",
      author: "Mike D.",
      date: "10/05/23",
      time: "14:20h",
    },
  ],
  users: [
    { id: 1, name: "John Peterson", role: "Designer" },
    { id: 2, name: "Sarah Miller", role: "Photographer" },
    { id: 3, name: "Mike Davis", role: "Project Manager" },
  ],
};
