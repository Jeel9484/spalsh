export interface Project {
  id: number;
  title: string;
  name: string;
}

export interface Snap {
  id: number;
  image: string;
  title: string;
  author: string;
}

export interface User {
  id: number;
  name: string;
  image: string;
}

export interface SearchResultsData {
  projects: Project[];
  snaps: Snap[];
  users: User[];
}

export const LOGO = "/assets/logo.svg";
export const mockSearchResults: SearchResultsData = {
  projects: [
    { id: 1, title: "Project name #01", name: "Marie Parker" },
    { id: 2, title: "Project name #01", name: "Marie Smith" },
    { id: 3, title: "Project name #01", name: "Marie Claire" },
  ],
  snaps: [
    {
      id: 1,
      image: "/assets/img-1.jpg",
      title: "Project name #01",
      author: "Marie Parker • 09/05/23.",
    },
    {
      id: 2,
      image: "/assets/img-2.jpg",
      title: "Project name #01",
      author: "Marie Parker • 09/05/23.",
    },
    {
      id: 3,
      image: "/assets/img-3.jpg",
      title: "Project name #01",
      author: "Marie Parker • 09/05/23.",
    },
  ],
  users: [
    { id:1, name: "Marie Claire", image: "/assets/us-2.png",},
    { id:2, name: "Marie Smith", image: "/assets/us-4.png" },
    { id:3, name: "Marie Parker", image: "/assets/us-3.png" },
  ],
};