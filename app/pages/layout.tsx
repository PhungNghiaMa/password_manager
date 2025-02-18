import NavBar from "../components/NavBar";
import "./global.css";
export default function PagesLayout({children} : {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}