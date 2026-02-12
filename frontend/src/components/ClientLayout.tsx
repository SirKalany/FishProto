'use client';

import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#900019',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#900019',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  );
}