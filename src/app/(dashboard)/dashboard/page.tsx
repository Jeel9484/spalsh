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
      <section className="border-b border-gray-200">
        <div className="flex items-center justify-between my-7">
          <h1 className="text-3xl font-medium text-gray">Dashboard</h1>
          <div className=" flex gap-3">
            <Button variant="primary" size="xs">
              <User />
              Create the User
            </Button>
            <Button variant="primary" size="xs">
              <RepeatCircle />
              Manage Fieds
            </Button>
            <Button variant="primary" size="xs">
              <EmojiHappy />
              Snaps by Project
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 mb-11 mt-8">
        <div className="flex justify-between mb-3">
          <h2 className="text-gray-600 font-semibold text-base">
            Latest Snaps
          </h2>
          <Button variant="primary" size="sm">
            All Snaps
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8.5">
          {snapsData.map((item, i) => (
            <Card location="Montecarlo Qc" key={i} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-20">
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
                <Button variant="primary" size="sm">All Users</Button>
              </div>
              <ActiveUsers users={users} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
