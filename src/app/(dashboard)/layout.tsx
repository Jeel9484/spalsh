import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1 bg-white ml-[220px]">
          <Header />
          <main className="flex-1 px-9">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
