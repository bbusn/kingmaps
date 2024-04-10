import { Lilita_One } from "next/font/google";
import { Imprima } from "next/font/google";
import { Metadata } from "next/types";
import "/app/globals.css";

export const lilita_one = Lilita_One({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-lilita-one',
}) 
export const imprima = Imprima({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-imprima',
}) 
export const metadata: Metadata = {
  title: "KingMaps - Se repérer dans l'IUT de Chambéry",
};

export default function LocaleLayout({
    children,
    params: {locale}
}: {
children: React.ReactNode;
params: {locale: string};
}) {
return (
    <html lang={locale}>
    <body className={`${lilita_one.variable} flex-center-center flex-column ${imprima.variable}`}>
        <main className="flex-center-center flex-column">
          <div className="app-container flex-evenly-center flex-column">
            {children}
          </div>
        </main>    
    </body>
    </html>
);
}