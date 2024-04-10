/** @format */

import Head from "next/head";
import ProgressBar from "../../../ui/progressBar";
import Image from "next/image";
import Header from "@/app/ui/layout/header";
import Link from "next/link";

export default function EndVisit() {
  return (
    <div className="Visit">
      <Header />
      <div className="Visit_container">
        <div className="Visit_container_header"></div>
        <div className="where">
          <h2>Merci pour votre visite</h2>
          <Image
            src="/images/departements/logos.png"
            alt="Merci"
            width={300}
            height={300}
          />
        </div>
        <div className="Visit_container_footer">
          <Link href="begin/" className="next">
            Terminer
          </Link>
        </div>
        <div className="Visit_container_footer_progress">
          <div className="progress">
            <div className="progress-bar end"></div>
          </div>
          <p className="imprima">5/5</p>
        </div>
      </div>
    </div>
  );
}
