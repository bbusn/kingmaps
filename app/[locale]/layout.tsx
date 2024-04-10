import { lilitaOne, imprima } from "./fonts";
import { Metadata } from "next/types";
import "/app/globals.css";

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
    <body className={`${lilitaOne.variable} flex-center-center flex-column ${imprima.variable}`}>
        <main className="flex-center-center flex-column">
          <div className="app-container flex-evenly-center flex-column">
            {children}
          </div>
        </main>    
    </body>
    </html>
);
}