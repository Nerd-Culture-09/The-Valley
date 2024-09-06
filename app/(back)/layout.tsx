import React, { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/Dashboard/Sitebar';
import NavBar from '@/components/Dashboard/Navbar';

// Layout component for the dashboard
export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  // Redirect to login if no session is found
  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar session={session} />
      <div className="flex flex-col">
        <NavBar session={session} />
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}