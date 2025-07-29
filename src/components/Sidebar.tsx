"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logout } from "iconsax-reactjs";
import { NAV_ITEMS, SIDEBAR_LOGO, USER } from "@/data/sidebardata";

export default function Sidebar() {
  const router = useRouter();

  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/loginpage");
  };

  return (
    <aside className="w-full bg-white flex flex-col justify-between border-r border-gray-200 z-30 shadow-custom">
      <div>
        {/* Sidebar brand */}
        <div className="flex items-center gap-2 py-7 px-7.5 border-b border-gray-200">
          <Image
            src={SIDEBAR_LOGO}
            alt="logo"
            width={38}
            height={38}
            className="h-9.5 w-auto"
          />
          <span className="font-semibold text-lg text-gray-800">
            Eugeniuses
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 mt-8 px-2">
          {NAV_ITEMS.map(({ label, icon: Icon, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg font-semibold 
              ${
                isActive
                  ? "bg-yellow-300 text-white" 
                  : "text-gray-700 hover:text-black hover:bg-gray-100"
              }`}
              >
                <Icon className="text-xl" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Logout & User */}
      <div className="px-6 pb-12">
        <button
          onClick={handleLogout}
          className="flex justify-center gap-2 text-gray-500 hover:text-black mb-6"
        >
          <Logout className="text-xl w-5 h-5 mt-1" />
          <span>Logout</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
            <Image
              src={USER.image}
              alt={USER.name}
              width={48}
              height={40}
              className="h-full w-full filter grayscale"
            />
          </span>
          <span className="font-medium text-gray-800">{USER.name}</span>
        </div>
      </div>
    </aside>
  );
}
