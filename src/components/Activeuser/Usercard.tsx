import { EmojiHappy, Trash, Edit } from "iconsax-reactjs";
import Image from "next/image";
import { User } from "@/data/userdata";

interface UserCardProps {
  item: User;
}
const UserCard: React.FC<UserCardProps> = ({ item }) => {
  const yellowBgIndices = [2, 4, 5, 7]; // Cards 2, 4, 5, 7

  return (
    <div className="relative py-6 bg-white border">
      {/* Top-right icons */}
      <div className="absolute top-5 right-5 flex gap-3">
        <Trash className="text-red-400 hover:text-red-600 cursor-pointer" />
        <Edit className="text-gray-400 hover:text-gray-600 cursor-pointer" />
      </div>

      {/* Avatar with optional yellow circle background */}
      <div className="grid place-items-center">
        <div
          className={`h-[70px] w-[70px] rounded-full overflow-hidden mb-2 ${
            yellowBgIndices.includes(item.id)
              ? "bg-yellow-400"
              : "bg-light-gray"
          }`}
        >
          <Image
            src={item.image}
            alt={item.name}
            width={70}
            height={70}
            className="object-cover w-full h-full filter grayscale"
          />
        </div>

        {/* Name */}
        <h3 className="text-sm font-semibold text-gray mb-6">{item.name}</h3>

        {/* Snap Count */}
        <div className="bg-yellow-400 w-fit text-white px-4 py-1 text-sm rounded-full font-semibold flex items-center gap-2 ">
          <EmojiHappy />
          {item.snapCount}
        </div>
      </div>
    </div>
  );
};
export default UserCard;
