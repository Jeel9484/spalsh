
export interface SnapData {
  image: string;
  title: string;
  author: string;
  date: string;
  time: string;
}

export interface User {
  name: string;
  img: string;
}

export const snapsData: SnapData[] = [
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

export const users: User[] = [
  { name: "Marie Claire", img: "/assets/user-1.png" },
  { name: "Emma Smith", img: "/assets/user-2.png" },
  { name: "Sarah Parker", img: "/assets/user-3.png" },
  { name: "Liam Murphy", img: "/assets/user-4.png" },
  { name: "Ethan Wilson", img: "/assets/user-5.png" },
];
