import ProgressBar from "@/app/ui/progressBar";
import Button from "./button";
import Image from "next/image";

interface VisitPageProps {
  pageTitle: string;
  mapImageSrc: string;
  locationText: string;
  locationImageSrc: string;
  infoText: string;
  nextLink: string;
  nextButton: string;
  progress: number;
  progressNumber: number;
}

const VisitPage = ({
  pageTitle,
  mapImageSrc,
  locationText,
  locationImageSrc,
  infoText,
  nextButton,
  nextLink,
  progress,
  progressNumber,
}: VisitPageProps): JSX.Element => {

  return (
      <div className="flex-center-center flex-column wd-90-pct">
        <h1 className="lilita-one">{pageTitle}</h1>
        <div className="where">
          <h2 className="lilita-one blue">{locationText}</h2>
          <Image src={locationImageSrc} alt="maps" width={250} height={150} />
          <h4 className="imprima mt-10">{infoText}</h4>
        </div>
        <Button href={nextLink} text={nextButton} accessKey="n" type="primary"/>
        <div className="Visit_container_footer_progress">
          <ProgressBar progress={progress} />
          <p className="imprima">{progressNumber}/5</p>
        </div>
      </div>
  );
};

export default VisitPage;
