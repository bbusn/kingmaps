import Head from "next/head";
import ProgressBar from "../../ui/ProgressBar";
import Button from "@/app/ui/button";
import Image from "next/image";
import Header from "@/app/ui/layout/header";

export default function Visit() {
  return (
    <div className="flex-center-center flex-column">
      <Header />
      <div className="Visit_container">
        <div className="where">
          <h2>VOUS ÊTES à</h2>
          <h3 className="lilita-one entry-text-color">l'ENTRÉE</h3>
          <Image
            src="/images/visit/entry.png"
            alt="Entry image"
            width={1000}
            height={1000}
          />
          <h4>LA Cafétéria est la prochaine salle à droite</h4>
        </div>
        <div className="Visit_container_footer">
          <Button href="/sgm" accessKey="n" text="Suivant" type="primary" />
        </div>
        <div className="Visit_container_footer_progress">
          <ProgressBar progress={20} />
          <p>1/5</p>
        </div>
      </div>
    </div>
  );
}
