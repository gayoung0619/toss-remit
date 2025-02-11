import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css"
import Providers from "@/utils/providers";


export const metadata: Metadata = {
  title: "송금하기 프로젝트",
  description: "토스송금하기 프로젝트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className={styles.wrapper}>
        <Providers>
          {children}
        </Providers>
      </div>
      </body>
    </html>
  );
}
