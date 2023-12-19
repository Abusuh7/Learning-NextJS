
import Link from "next/link";
export default function DashboardLayout({ children }) {
  return (
    <section>
        
        <main className=" bg-gray-50 p-8 ml-7">{children}</main>
        
        </section>
  );
}