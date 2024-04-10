/** @format */

import Head from "next/head";
import ProgressBar from "../../../ui/ProgressBar";
import Image from "next/image";
import Header from "@/app/ui/layout/header";

export default function Sgm() {
  return (
    <div className="Visit">
      <Header />
      <div className="Visit_container">
        <div className="Visit_container_header"></div>
        <div className="where">
          <h2 className="lilita-one">VOUS ÊTES DANS</h2>
          <h3 className="sgm-text-color">l'aile SGM</h3>
          <Image
            src="/images/visit/sgm.png"
            alt="SGM image"
            width={1000}
            height={1000}
          />
          <h4>UN Bachelor pour DEVENIR EXPERT DES Matériaux</h4>
        </div>
        <div className="Visit_container_footer">
          <a href="/visit" className="back">
            RETOUR
          </a>
          <a href="/end-page" className="next">
            SUIVANT
          </a>
        </div>
        <div className="Visit_container_footer_progress">
          <div className="progress">
            <div className="progress-bar sgm"></div>
          </div>
          <p>2/5</p>
        </div>
      </div>
    </div>
  );
}
