import "./globals.css";

export const metadata = {
  title: "Linked Dao",
  description:
    "Unlock the power of Web2 and Web3 technologies with Linked DAO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
