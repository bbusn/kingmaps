/** @format */

import React from "react";
import ProgressBar from "./progressBar";
import Image from "next/image";
import Link from "next/link";

interface VisitPageProps {
  pageTitle: string;
  mapImageSrc: string;
  locationText: string;
  locationImageSrc: string;
  infoText: string;
  backLink: string;
  nextLink: string;
  progress: number;
}

const VisitPage = ({
  pageTitle,
  mapImageSrc,
  locationText,
  locationImageSrc,
  infoText,
  backLink,
  nextLink,
  progress,
}: VisitPageProps): JSX.Element => {
  return (
    <div className="Visit">
      <div className="Visit_container">
        <div className="Visit_container_header">
          <h1>{pageTitle}</h1>
          <div className="Maps"></div>
        </div>
        <div className="where">
          <h2>VOUS ÊTES DANS</h2>
          <h3 className="sgm-text-color">{locationText}</h3>
          <Image src={locationImageSrc} alt="maps" width={250} height={150} />
          <h4>{infoText}</h4>
        </div>
        <div className="Visit_container_footer">
          <Link href={backLink} className="back">
            RETOUR
          </Link>
          <Link href={nextLink} className="next">
            SUIVANT
          </Link>
        </div>
        <div className="Visit_container_footer_progress">
          <ProgressBar progress={progress} />
          <p>{progress}/5</p>
        </div>
      </div>
    </div>
  );
};

export default VisitPage;
