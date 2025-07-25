import "@/app/globals.css";

export const metadata = {
  title: "Infosnap",
  description: "Login to Infosnap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
