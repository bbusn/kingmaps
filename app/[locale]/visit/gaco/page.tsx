/** @format */

import Header from "@/app/ui/layout/header";
import VisitPage from "@/app/ui/visitPage";
import { useTranslations } from "next-intl";

export default function Mmi() {
  const t = useTranslations("Gaco");
  const t2 = useTranslations("Visit");
  return (
    <div className="flex-center-center flex-column wd-90-pct">
      <Header />
      <VisitPage
        pageTitle={t2("You-are-at")}
        mapImageSrc="/images/departements/sgm.png"
        locationText={t("Title")}
        locationImageSrc="/images/departements/gaco.png"
        infoText={t("Description")}
        nextButton={t2("Next")}
        nextLink="/visit/mmi"
        progress={40} // Change progress value as needed
        progressNumber={2}
      />
    </div>
  );
}
