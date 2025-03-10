import NavBar from "../components/NavBar";
import "./global.css";
export default function PagesLayout({children} : {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <head>
      </head>
      <body style={{width:"100%" , height:"100%" , widows:"100vw"}} suppressHydrationWarning>
        <NavBar />
        {children}
      </body>
    </html>
  );
}