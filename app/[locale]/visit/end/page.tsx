/** @format */

import Head from "next/head";
import ProgressBar from "../../../ui/ProgressBar";
import Image from "next/image";
import Header from "@/app/ui/layout/header";

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
          <a href="sgm.html" className="back">
            RETOUR
          </a>
          <a href="../start.html" className="next">
            TERMINER
          </a>
        </div>
        <div className="Visit_container_footer_progress">
          <div className="progress">
            <div className="progress-bar end"></div>
          </div>
          <p>5/5</p>
        </div>
      </div>
    </div>
  );
}
