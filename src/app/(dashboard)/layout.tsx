"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen">
        <Header />
        <div
          className="grid grid-cols-[220px_auto] h-full"
          style={{ height: "calc(100vh - 91px)" }}
        >
          <Sidebar />
          <main className=" overflow-y-auto px-9">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
