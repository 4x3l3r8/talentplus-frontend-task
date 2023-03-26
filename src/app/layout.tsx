import "./globals.css";

export const metadata = {
  title: "Tech Time",
  description: "TalentPlus Frontend developer task",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
