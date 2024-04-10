/** @format */

import Head from "next/head";
import ProgressBar from "../../../ui/progressBar";
import Image from "next/image";
import Header from "@/app/ui/layout/header";
import Link from "next/link";

export default function Sgm() {
  return (
    <div className="flex-center-center flex-column ht-100-pct wd-90-pct gap-10">
      <Header />
      <div className="flex-center-center flex-column">
        <div className="where">
          <h2 className="lilita-one">VOUS ÊTES DANS</h2>
          <h3 className="lilita-one sgm-text-color">l'aile SGM</h3>
          <Image
            src="/images/departements/sgm.png"
            alt="SGM image"
            width={250}
            height={150}
          />
          <h4 className="imprima">UN Bachelor pour DEVENIR EXPERT DES Matériaux</h4>
        </div>
        <div className="lilita-one Visit_container_footer">
          <Link href="/visit/end" className="next">
            Suivant
          </Link>
        </div>
        <div className="Visit_container_footer_progress">
          <ProgressBar progress={50} />
          <p className="imprima">2/5</p>
        </div>
      </div>
    </div>
  );
}
