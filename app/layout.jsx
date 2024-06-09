import { Inter } from "next/font/google";
import '@/styles/main.sass'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskTrack",
  description: "Gestiona tu futuro, sigue tus metas, consigue tus objetivos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
