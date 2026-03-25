 
// User layout.tsx (app/user/layout.tsx)
import { Sidebar } from "@/app/user/components/UserSidebar";
import { Navbar } from "@/app/user/components/UserNavbar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <style>{`
        .sidebar-wrapper {
          display: none;
        }

        .main-content {
          margin-left: 0;
        }

        @media (min-width: 768px) {
          .sidebar-wrapper {
            display: block;
          }

          .main-content {
            margin-left: 260px;
          }
        }
      `}</style>

    <div className="sidebar-wrapper" >
      <Sidebar /></div>
      <div className="flex-1 main-content flex flex-col min-h-screen pt-[76px]">
        <Navbar />
        <main className="flex-1 w-full bg-[#FFFFFF]">
          {children}
        </main>
      </div>
    </>
  );
} 
 