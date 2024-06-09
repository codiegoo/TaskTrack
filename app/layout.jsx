import '@/styles/main.sass'

export const metadata = {
  title: "TaskTrack",
  description: "Gestiona tu futuro, sigue tus metas, consigue tus objetivos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
