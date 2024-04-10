import {useTranslations} from 'next-intl';
import Header from '@/app/ui/layout/header';
import Button from '@/app/ui/button';
import Image from 'next/image';

export default function Begin() {
  const t = useTranslations('Begin');

  return (
    <div className="flex-center-center flex-column gap-30">
      <Header />
      <Image src="/images/iut-top-view.png" alt="Vue du haut de l'IUT" width={98} height={140} />
      <h1 className="flex-center-center flex-column">{t('Title-1')} <span>{t('Title-2')}</span></h1>
      <Button href="/map" text={t('Open-map')} accessKey="m" type='primary' />
      <Button href="/visit/sgm" text={t('Guided-visit')} accessKey="v" type='secondary' />
    </div>
  );
}
