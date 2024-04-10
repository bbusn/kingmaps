import {useTranslations} from 'next-intl';
import Header from '@/app/ui/layout/header';
import Image from 'next/image';

export default function Entrance() {
  const t = useTranslations('Entrance');

  return (
    <div className="flex-center-center flex-column gap-30">
      <Header />
      <h1 className="flex-center-center flex-column">{t('Title')}</h1>
      <Image src="/images/departements/entrance.png" alt="Entrance Image" width={250} height={150} />
      <h2 className="flex-center-center flex-column">{t('Description')}</h2>
    </div>
  );
}
