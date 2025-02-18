import './login.css'; 
export default function LoginLayout({children} : {children: React.ReactNode}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
     </html> 
  );

}