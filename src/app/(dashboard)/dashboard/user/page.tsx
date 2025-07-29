"use client"
import {Users} from "@/data/userdata"
import Button from "@/components/ui/button";
import {User as Usericon} from "iconsax-reactjs";
import { FaAngleDown } from "react-icons/fa";
import UserCard from "@/components/Activeuser/Usercard";

export default function User() {
  return (
    <>
      <section className="border-b border-gray-200 mb-9">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-gray font-medium">User</h1>
          <Button variant="primary" size="xs" className="mb-7 mt-7">
            <Usericon />
            Create the User
          </Button>
        </div>
      </section>

      <section>
        <div className="flex justify-between">
          <h2 className="text-base font-semibold text-gray">
            Projects (8)
          </h2>
          <div className="inline-flex gap-[17px] items-center justify-center rounded-2xl p-2 border border-gray-400">
            <span className="text-gray-500 text-base">Sort by Name</span>
            <FaAngleDown />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-6">Team Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Users.map((user) => (
              <UserCard key={user.id} item ={user} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
