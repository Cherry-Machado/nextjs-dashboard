import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <body suppressHydrationWarning={true}>{children}</body> */}
      {<body className={`${inter.className}  antialiased`} suppressHydrationWarning={true}>{children}</body>}
    </html>
  );
}
