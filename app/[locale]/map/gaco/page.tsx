import {useTranslations} from 'next-intl';
import Header from '@/app/ui/layout/header';
import Image from 'next/image';

export default function Gaco() {
  const t = useTranslations('Gaco');

  return (
    <div className="flex-center-center flex-column gap-30">
      <Header />
      <h1 className="flex-center-center flex-column">{t('Title')}</h1>
      <Image src="/images/departements/gaco.png" alt="G.A.C.O Image" width={250} height={150} />
      <h2 className="flex-center-center flex-column">{t('Description')}</h2>
      <p className="mapText flex-center-center flex-column">{t('Text')}</p>
    </div>
  );
}
