import { lilitaOne, imprima } from "./[locale]/fonts";

import { Metadata } from "next/types";
import './not-found.css'


export const metadata: Metadata = {
  title: "KingMaps - Se repérer dans l'IUT de Chambéry",
};

export default function NotFound() {
    return (
        <body className={`${lilitaOne.variable} flex-center-center flex-column ${imprima.variable}`}>
            <main className="flex-center-center flex-column">
                <div className="app-container flex-center-center flex-column">
                    <h1 className="flex-center-center flex-column lilita-one">404</h1>
                    <h2>Page not found</h2>
                </div>
            </main>    
        </body>
    );
}