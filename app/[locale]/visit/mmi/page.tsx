/** @format */

// pages/sgm.js

import Head from "next/head";
import VisitPage from "@/app/ui/visitPage";
import { useTranslations } from "next-intl";

export default function Mmi() {
  const t = useTranslations("Mmi");
  const t2 = useTranslations("Visit");
  return (
    <div>
      <VisitPage
        pageTitle={t2("You-are-at")}
        mapImageSrc="/images/departements/mmi.png"
        locationText={t("Title")}
        locationImageSrc="/images/departements/mmi.png"
        infoText={t("Description")}
        backLink="entry.html"
        nextLink="end-page.html"
        progress={40} // Change progress value as needed
      />
    </div>
  );
}
