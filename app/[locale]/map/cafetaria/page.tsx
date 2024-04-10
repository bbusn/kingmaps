import {useTranslations} from 'next-intl';
import Header from '@/app/ui/layout/header';
import Image from 'next/image';

export default function Cafetaria() {
  const t = useTranslations('Cafetaria');

  return (
    <div className="flex-center-center flex-column gap-30">
      <Header />
      <h1 className="flex-center-center flex-column">{t('Title')}</h1>
      <Image src="/images/departements/cafetaria.png" alt="Cafetaria Image" width={250} height={150} />
      <h2 className="flex-center-center flex-column">{t('Description')}</h2>
      <p className="mapText flex-center-center flex-column">{t('Text')}</p>
    </div>
  );
}
