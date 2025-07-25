import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen grid grid-cols-[220px_auto] ">
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
          <main className="px-9">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
