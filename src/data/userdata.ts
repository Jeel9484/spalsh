export interface User {
  id: number;
  name: string;
  image: string;
  snapCount: number;
}

export const Users: User[] = [
  {id:1, name: "Emma Smith", image: "/assets/us-1.png", snapCount: 312 },
  {id:2, name: "Marie Claire", image: "/assets/us-2.png", snapCount: 200 },
  {id:3, name: "Sarah Parker", image: "/assets/us-3.png", snapCount: 160 },
  {id:4, name: "Liam Murphy", image: "/assets/us-4.png", snapCount: 74 },
  {id:5, name: "Emma Smith", image: "/assets/us-4.png", snapCount: 312 },
  {id:6, name: "Marie Claire", image: "/assets/us-1.png", snapCount: 200 },
  {id:7, name: "Sarah Parker", image: "/assets/us-2.png", snapCount: 160 },
  {id:8, name: "Liam Murphy", image: "/assets/us-3.png", snapCount: 74 },
];
