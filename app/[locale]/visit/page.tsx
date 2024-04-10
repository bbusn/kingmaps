/** @format */

import Head from "next/head";
import ProgressBar from "../../ui/ProgressBar";
import Button from "@/app/ui/button";
import Image from "next/image";
import Header from "@/app/ui/layout/header";
import { useTranslations } from "next-intl";

export default function Visit() {
  const t = useTranslations("Visit");

  return (
    <div className="flex-center-center flex-column ht-100-pct wd-100-pct">
      <Header />
      <div className="Visit_container">
        <div className="where">
          <h2 className="lilita-one">{t("Title")}</h2>
          <h3 className="lilita-one entry-text-color">{t("Description")}</h3>
          <Image
            src="/images/departements/entrance.png"
            alt="Entry image"
            width={200}
            height={100}
          />
          <h4 className="imprima">{t("Text")}</h4>
        </div>
        <div className="Visit_container_footer">
          <Button
            href="/visit/sgm"
            accessKey="n"
            text="Suivant"
            type="primary"
          />
        </div>
        <div className="Visit_container_footer_progress">
          <ProgressBar progress={20} />
          <p>1/5</p>
        </div>
      </div>
    </div>
  );
}
