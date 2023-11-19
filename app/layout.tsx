'use client'
import "./globals.css";
import Navbar from "./(main)/analytics/components/Navbar";
import NextAdapterApp from "next-query-params/app";
import {
  QueryParamProvider,
} from "use-query-params";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono">
        <QueryParamProvider adapter={NextAdapterApp}>
          <Navbar />
          {children}
        </QueryParamProvider>
      </body>
    </html>
  );
}
