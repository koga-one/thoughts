import "./globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>thoughts</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="Thoughts that pass by" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/728cb48e9f.js"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="container mx-auto my-1 min-h-screen px-1 md:my-2 md:px-2">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
