import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const popins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Traversy Media",
  description: "Web DEV",
  keyword: "ff, dfds,fdsfds,sdgdsg,sdg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
