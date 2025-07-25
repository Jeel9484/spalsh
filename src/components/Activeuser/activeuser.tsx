interface User {
  name: string;
  img: string;
}

interface ActiveUsersProps {
  users: User[];
}

export default function ActiveUsers({ users }: ActiveUsersProps) {
  const activeIndices = [0, 3];
  return (
    <div className="space-y-4 mt-6">
      {users.map((user, idx) => (
        <div key={user.name} className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden
              ${activeIndices.includes(idx) ? "bg-primary" : ""}
            `}
          >
            <img
              src={user.img}
              alt={user.name}
              className={`w-full h-full object-cover filter grayscale
                ${!activeIndices.includes(idx) ? "grayscale" : ""}
              `}
            />
          </div>
          <span
            className={`text-base font-medium hover:text-gray-950 ${
              activeIndices.includes(idx)
                ? "text-gray-400"
                : "text-gray-400"
            }`}
          >
            {user.name}
          </span>
        </div>
      ))}
    </div>
  );
}
