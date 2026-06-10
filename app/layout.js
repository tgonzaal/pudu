import './globals.css';
import Navbar from '@/components/Navbar';
import { ToastProvider } from '@/components/Toast';

export const metadata = {
  title: 'Pudú — El ecosistema en movimiento',
  description: 'Plataforma de networking e inteligencia para eventos de innovación del sur de Chile.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ToastProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
