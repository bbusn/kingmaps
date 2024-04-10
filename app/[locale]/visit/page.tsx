/** @format */

// pages/index.js

import Head from "next/head";
import ProgressBar from "../../ui/ProgressBar";
import Image from "next/image";
import Header from "@/app/ui/layout/header";

export default function Visit() {
  return (
    <div className="">
      {/*  */}
      <Header />
      <div className="Visit_container">
        <div className="Visit_container_header">
          <div className="Maps">
            {/*  <Image
              src="/images/visit/entry-plan.png"
              alt="G.C.C.D image"
              width={40}
              height={40}
            /> */}
          </div>
        </div>
        <div className="where">
          <h2>VOUS ÊTES à</h2>
          <h3 className="entry-text-color">l'ENTRÉE</h3>
          <Image
            src="/images/departements/entrance.png"
            alt="Entry image"
            width={1000}
            height={1000}
          />
          {/* <img src="../images/visit/entry.png" alt="enter" /> */}
          <h4>LA Cafétéria est la prochaine salle à droite</h4>
        </div>
        <div className="Visit_container_footer">
          <a href="../index.html" className="back">
            RETOUR
          </a>
          <a href="sgm.html" className="next">
            SUIVANT
          </a>
        </div>
        <div className="Visit_container_footer_progress">
          <ProgressBar progress={20} />
          <p>1/5</p>
        </div>
      </div>
    </div>
  );
}
