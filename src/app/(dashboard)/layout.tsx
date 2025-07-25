import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <div className="min-h-screen grid grid-cols-[220px_auto] grid-rows-[auto_1fr]">
        <div className="row-span-2"><Sidebar /> </div>
        <Header />
        <main className="px-9">{children}</main>
      </div>
      <Footer />
    </>
  );
}
