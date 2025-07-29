"use client";
import ActiveUsers from "@/components/Activeuser/activeuser";
import Barchart from "@/components/chart/barchart";
import Piechart from "@/components/chart/piechart";
import Button from "@/components/ui/button";
import Card from "@/components/ui/snapscard";
import { User, RepeatCircle, EmojiHappy } from "iconsax-reactjs";
import { snapsData, users } from "@/data/dashboarddata";

export default function DashboardPage() {
  return (
    <>
      <section className="border-b border-gray-200 py-7 mb-8 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-black font-medium">Dashboard</h1>
          <div className=" flex gap-3">
            <Button>
              <User />
              Create the User
            </Button>
            <Button>
              <RepeatCircle />
              Manage Fieds
            </Button>
            <Button>
              <EmojiHappy />
              Snaps by Project
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 mb-11">
        <div className="flex justify-between mb-3">
          <h2 className="text-gray-600 font-semibold text-base">
            Latest Snaps
          </h2>
          <Button>All Snaps</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {snapsData.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-lg">Analytics</h2>
          <div className="flex items-center gap-3"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Barchart />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <Piechart />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-base">Active users</span>
                <Button className="px-6 py-4">All Users</Button>
              </div>
              <ActiveUsers users={users} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
